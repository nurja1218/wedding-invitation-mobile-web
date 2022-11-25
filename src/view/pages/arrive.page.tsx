import { BaseColor, Button, Flex } from '@wds-kit/core';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { ModalType } from '../../lib/enums';
import { arriveModal, certificateModal } from '../../recoil/atoms';
import { Screen } from '../components';

export function ArrivePage() {
    const { serial } = useParams();
    const setModal = useSetRecoilState(arriveModal);
    const setCertificate = useSetRecoilState(certificateModal);

    const handleSubmit = () => {
        if (localStorage && localStorage.signatureImage) {
            setModal({
                type: ModalType.SUCCESS,
                open: true,
            });
        }
    }

    return (
        <Screen
            header={{
                title: '서명을 해주세요',
                content: (
                    <Flex align="flex-end" justify="space-between">
                        <Flex align="flex-start" column>
                            <SubTitle>제품 온도</SubTitle>
                            <Measurement>
                                -
                            </Measurement>
                        </Flex>
                        <Flex justify="flex-end">
                            <Button
                                type="secondary"
                                onClick={() => setCertificate(true)}
                            >
                                출하증명서 보기
                            </Button>
                        </Flex>
                    </Flex>
                ),
            }}
            footer={{ submitTitle: '서명 전송' }}
            onClickSubmit={handleSubmit}
        />
    );
}

const SubTitle = styled.h4`
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: ${BaseColor.Neutral700};
`;

const Measurement = styled.div<{ isPass?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    font-size: 2rem;
    font-weight: 700;
    color: ${BaseColor.Neutral800};
`;
