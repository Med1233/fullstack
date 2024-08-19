import { atom } from 'jotai';

import { User } from './models';

export const curretUserAtom = atom<User | null>(null);
