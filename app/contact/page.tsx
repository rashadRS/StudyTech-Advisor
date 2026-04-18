'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return <div className="max-w-xl"><h1 className="text-3xl font-bold mb-6">Contact</h1><form className="card p-6 space-y-3" onSubmit={(e) => {e.preventDefault(); setSent(true);}}><input required placeholder="Name" className="w-full rounded-xl border p-3 bg-transparent"/><input required type="email" placeholder="Email" className="w-full rounded-xl border p-3 bg-transparent"/><textarea required placeholder="Message" className="w-full rounded-xl border p-3 bg-transparent" rows={5}/><button className="btn-primary">Send</button>{sent && <p className="text-teal-600 text-sm">Message sent successfully.</p>}</form></div>;
}
