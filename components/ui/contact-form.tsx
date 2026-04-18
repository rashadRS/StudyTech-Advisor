'use client';

import { useState } from 'react';
import { Button } from './button';

export function ContactForm() {
  const [status, setStatus] = useState('');
  return (
    <form
      className="grid gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        setStatus('Message sent successfully (mock).');
      }}
    >
      <input required placeholder="Name" className="rounded-xl border p-3 bg-transparent" />
      <input required type="email" placeholder="Email" className="rounded-xl border p-3 bg-transparent" />
      <textarea required placeholder="Message" className="rounded-xl border p-3 bg-transparent" rows={4} />
      <Button type="submit">Send</Button>
      {status && <p className="text-sm text-teal-600">{status}</p>}
    </form>
  );
}
