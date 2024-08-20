'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';

import { clearToken, getToken } from '../../utils/auth';

import { curretUserAtom } from '@/app/atoms';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [currentUser, setCurretUser] = useAtom(curretUserAtom);

    const token = getToken();

    useEffect(() => {
      if (currentUser) {
        return;
      }

      if (!token) {
        router.push('/login');

        return;
      }

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/current-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        method: 'GET'
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          throw new Error('Invalid token');
        })
        .then((data) => {
          setCurretUser(data);
        })
        .catch(() => {
          clearToken();
          router.push('/login');
        });
    }, [token]);

    if (!currentUser) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
