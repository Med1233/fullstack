'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

export default () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
          body: JSON.stringify({ email, password, username }),
          headers: { 'Content-Type': 'application/json' },
          method: 'POST'
        }
      );

      if (!res.ok) throw new Error('Registration failed');

      // Handle successful registration, e.g., redirect to login page
      router.push('/login');
    } catch (error) {
      setError('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <input
        placeholder="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={{ background: 'red' }} type="submit">
        Register
      </button>
    </form>
  );
};
