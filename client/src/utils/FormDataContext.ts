import { createContext } from 'react';

export interface IData {
  title: string;
  photoURL: string;
  bestFit: string;
  measurementA: string;
  measurementB: string;
  price: number;
  asIs: string;
  comments: string;
  theme: 'light' | 'dark';
}
export const dataDefault: IData = {
  title: '',
  photoURL: '',
  bestFit: 'Best Fit - ',
  measurementA: 'Chest - ',
  measurementB: '',
  price: 0,
  asIs: 'As-is - ',
  comments: '',
  theme: 'light'
};

export const FormDataContext = createContext<IData>(dataDefault);
