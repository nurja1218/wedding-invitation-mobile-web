import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import styled from 'styled-components';
import { BaseColor } from '@wds-kit/core';
import { ReactComponent as Error } from '../../assets/icons/error.svg';
import { ReactComponent as Arrive } from '../../assets/icons/arrive.svg';
import { ArriveModalType, ModalItems } from '../../lib/types';
import { arriveModal } from '../../recoil/atoms';
import { Guide, Modal } from '../components';
import { ModalButtonType } from '../../lib/enums';

interface ModalItemsProps {
    getModal: ArriveModalType;
    handleClose: () => any;
    handleSubmit: () => any;
}


export function ArriveModal() {
    const getModal = useRecoilValue(arriveModal);
    const [visible, setVisible] = useState<boolean>(true);
    const [modalItems, setModalItems] = useState<ModalItems>()

    // 모달의 닫기 or 확인 클릭 시 해당 모달부분만 close
    const handleClose = () => {
        setVisible(false)
    }

    return (
        <Background>
            <Guide />
            {getModal.type && <Modal
                type={getModal.type}
                visible={visible}
                image={<Arrive />}
                message={'도착 모달'}
                buttons={[{ type: ModalButtonType.SUCCESS, text: '확인', onClick: handleClose }]}
            />}
        </Background>
    );
}


const Background = styled.div`
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 0 1.5rem;
    background: ${BaseColor.Neutral900};
`;
