'use client';

import { storage } from '@/lib/utils';

export type User = { fullName: string; email: string; password: string; university: string; major: string; createdAt: string };

export type AuthResult = { ok: true; user: User } | { ok: false; error: string };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const auth = {
  validateSignup(input: Omit<User, 'createdAt'>): string | null {
    if (!input.fullName || !input.email || !input.password || !input.university || !input.major) return 'required';
    if (!emailRegex.test(input.email)) return 'invalid_email';
    if (input.password.length < 6) return 'short_password';
    return null;
  },
  signup(input: Omit<User, 'createdAt'>): AuthResult {
    const users = storage.get<User[]>('studytech_users', []);
    if (users.some((u) => u.email.toLowerCase() === input.email.toLowerCase())) return { ok: false, error: 'email_exists' };
    const user: User = { ...input, createdAt: new Date().toISOString() };
    users.push(user);
    storage.set('studytech_users', users);
    storage.set('studytech_session', user.email);
    return { ok: true, user };
  },
  login(email: string, password: string): AuthResult {
    const users = storage.get<User[]>('studytech_users', []);
    const match = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (!match) return { ok: false, error: 'invalid_credentials' };
    storage.set('studytech_session', match.email);
    return { ok: true, user: match };
  },
  currentUser() {
    const users = storage.get<User[]>('studytech_users', []);
    const session = storage.get<string | null>('studytech_session', null);
    return users.find((u) => u.email === session) ?? null;
  },
  isLoggedIn() {
    return !!storage.get<string | null>('studytech_session', null);
  },
  logout() {
    storage.set('studytech_session', null);
  }
};
