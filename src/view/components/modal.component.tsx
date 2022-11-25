import { BaseColor, Button, Flex } from '@wds-kit/core';
import styled from 'styled-components';
import { ReactNode } from 'react';
import { ModalButtonType, ModalType } from '../../lib/enums';

interface ModalButton {
    type: ModalButtonType;
    text: string;
    onClick?: () => any;
}

interface ModalProps {
    type: ModalType;
    visible: boolean;
    // 나중에 useModal로 관리
    image?: ReactNode;
    message?: string;
    content?: string | ReactNode;
    buttons?: ModalButton[];
}

export function Modal(props: ModalProps) {
    // 나중에 recoil로 받아낼 값들
    const { type, visible, image, message, content, buttons } = props;

    const handleSubmit = (onClick: any) => {
        onClick && onClick();
    };
    return (
        <>
            {visible && (
                <ModalContainer>
                    <Body>
                        <Flex column>
                            {image}
                            {message?.split('\n').map((text, idx) => (
                                <div key={`line${idx}`}>
                                    <Typography>{text}</Typography>
                                </div>
                            ))}
                            {content}
                        </Flex>
                    </Body>
                    <Footer>
                        <Flex gap={20}>
                            {buttons?.map((button, idx) => {
                                const buttonType =
                                    button.type === ModalButtonType.SUCCESS
                                        ? 'primary'
                                        : button.type === ModalButtonType.FAIL
                                            ? 'dangerous'
                                            : button.type === ModalButtonType.CANCEL
                                                ? 'text_gray'
                                                : 'primary';
                                const backgroundColor =
                                    button.type === ModalButtonType.CANCEL
                                        ? BaseColor.Neutral400
                                        : null;
                                return (
                                    <Button
                                        key={`button${idx}`}
                                        type={buttonType}
                                        size="large"
                                        block
                                        style={
                                            backgroundColor
                                                ? {
                                                    height: '48px',
                                                    backgroundColor: backgroundColor,
                                                }
                                                : {
                                                    height: '48px',
                                                }
                                        }
                                        onClick={() => handleSubmit(button.onClick)}
                                    >
                                        {button.text}
                                    </Button>
                                );
                            })}
                        </Flex>
                    </Footer>
                </ModalContainer>
            )}
        </>
    );
}

const ModalContainer = styled.div`
    position: relative;
    min-width: 90vw;
    max-height: 70vh;
    background: ${BaseColor.White};
    border-radius: 12px;
`;

const Body = styled.div`
    position: relative;
    width: 100%;
    padding: 56px 0 39px;
    svg {
        margin-bottom: 28px;
    }
`;

const Typography = styled.p`
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    word-break: keep-all;
`;

const Footer = styled.div`
    padding: 0px 20px 28px;
`;
