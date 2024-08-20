'use client';

import { useAtom } from 'jotai';
import { isNil } from 'ramda';

import { curretUserAtom } from '../atoms';
import { clearToken } from '../utils/auth';

const Logout = (): JSX.Element => {
  const [currentUser, setCurretUser] = useAtom(curretUserAtom);

  const logout = (): void => {
    clearToken();
    setCurretUser(null);

    window.location.reload();
  };

  return (
    <button type="button" onClick={logout}>
      Logout
    </button>
  );
};

export default Logout;
