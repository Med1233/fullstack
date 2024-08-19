'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { clearToken, getToken } from '../../utils/auth';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [isValid, setIsValid] = useState(false);
    const token = getToken();

    useEffect(() => {
      if (!token) {
        router.push('/login');
      } else {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/current-user`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          method: 'GET'
        })
          .then((response) => {
            if (response.status === 200) {
              setIsValid(true);
            } else {
              throw new Error('Invalid token');
            }
          })
          .catch((error) => {
            clearToken();
            router.push('/login');
          });
      }
    }, [token]);

    if (!isValid) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
