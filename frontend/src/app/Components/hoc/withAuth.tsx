'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const isAuthenticated = true; // Replace with your authentication logic

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/login');
      }
    }, [isAuthenticated]);

    if (!isAuthenticated) {
      return null; // or a loading spinner, etc.
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
