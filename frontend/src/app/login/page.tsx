'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { setToken } from '../utils/auth';

const Page = (): JSX.Element => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        body: JSON.stringify({ password, username }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
      });

      if (!res.ok) throw new Error('Login failed');

      const data = await res.json();

      setToken(data.access_token);
      router.push('/');
    } catch {
      setError('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <input
        placeholder="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Page;
