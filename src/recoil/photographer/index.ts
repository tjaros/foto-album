import { atom } from 'recoil';

const photographerCurrentTabAtom = atom({
  key: 'photographerCurrentTab',
  default: 'Photos'
});

export default photographerCurrentTabAtom;
