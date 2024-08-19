'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';

import { clearToken, getToken } from '../../utils/auth';

import { curretUserAtom } from '@/app/atoms';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [isValid, setIsValid] = useState(false);
    const [currentUser, setCurretUser] = useAtom(curretUserAtom);

    const token = getToken();

    console.log('currentUser : ', currentUser);

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
              return response.json();
            }
            throw new Error('Invalid token');
          })
          .then((data) => {
            setIsValid(true);
            setCurretUser(data);
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
