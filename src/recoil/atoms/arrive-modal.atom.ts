import { atom } from 'recoil';
import { ArriveModalType } from '../../lib/types';

export const arriveModal = atom<ArriveModalType>({
    key: 'app/arriveModal',
    default: {
        open: false,
    },
});
