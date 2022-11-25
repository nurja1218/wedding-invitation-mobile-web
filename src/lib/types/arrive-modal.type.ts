import { ReactNode } from 'react';
import { ModalButtonType, ModalType } from '../enums';

interface ModalButton {
    type: ModalButtonType;
    text: string;
    onClick?: () => any;
}

export interface ModalItems {
    // useModal
    image?: ReactNode;
    message?: string;
    content?: string | ReactNode;
    buttons?: ModalButton[];
}

export interface ArriveModalType extends ModalItems {
    type?: ModalType;
    open: boolean;
}
