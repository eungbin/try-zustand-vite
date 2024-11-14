import { create } from 'zustand';
import { ICountStore } from './types';

const useCountStore = create<ICountStore>((set) => ({
  count: 0, // 초기값
  setCount: (number: number) => set({ count: number })
}));

export default useCountStore;