'use client';

import { storage } from '@/lib/utils';

export type User = { fullName: string; email: string; password: string; university: string; major: string };

export const auth = {
  signup(user: User) {
    const users = storage.get<User[]>('studytech_users', []);
    users.push(user);
    storage.set('studytech_users', users);
    storage.set('studytech_session', user.email);
  },
  login(email: string, password: string) {
    const users = storage.get<User[]>('studytech_users', []);
    const match = users.find((u) => u.email === email && u.password === password);
    if (!match) throw new Error('Invalid credentials');
    storage.set('studytech_session', match.email);
  },
  currentUser() {
    const users = storage.get<User[]>('studytech_users', []);
    const session = storage.get<string | null>('studytech_session', null);
    return users.find((u) => u.email === session) ?? null;
  },
  logout() { storage.set('studytech_session', null); }
};
