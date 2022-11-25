import { atom } from 'recoil';

export const certificateModal = atom<boolean>({
    key: 'app/certificateModal',
    default: false,
});
