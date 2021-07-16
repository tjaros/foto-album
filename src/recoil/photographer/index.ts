import { atom } from 'recoil';

const photographerCurrentTabAtom = atom({
  key: 'photographerCurrentTab',
  default: 'Photos'
});

export const photographerLastUsedImageGridAtom = atom({
  key: 'photographerLastImageGrid',
  default: undefined
});

export default photographerCurrentTabAtom;
