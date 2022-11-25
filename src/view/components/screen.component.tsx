import React, { useState } from 'react';
import { BaseColor, Button, Color, SignatureCanvas } from '@wds-kit/core';
import { useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as Refresh } from '../../assets/icons/refresh.svg';
import toast from 'react-hot-toast';

export type ButtonType =
    | 'primary'
    | 'secondary'
    | 'text_color'
    | 'text_gray'
    | 'dangerous'
    | 'underline'
    | 'action_icon'
    | undefined;

interface ScreenProps {
    header: ScreenHeaderProps;
    footer?: ScreenFooterProps;
    resetButton?: boolean;
    hasSignPad?: boolean;
    onClickSubmit?: () => void;
}

interface ScreenHeaderProps {
    title: string;
    content?: string | React.ReactNode;
}
interface ScreenFooterProps {
    submitTitle?: string;
    content?: string | React.ReactNode;
    buttonType?: ButtonType;
}

export function Screen(props: ScreenProps) {
    const { header, footer, resetButton = true, hasSignPad = true, onClickSubmit, ...rest } = props;
    const [isSign, setIsSign] = useState<boolean>(false);

    const canvasRef: any = useRef(null);

    const handleClearCanvas = () => {
        canvasRef.current.clear();
        localStorage.removeItem('signatureImage');
        setIsSign(false);
    };

    const handleSubmit = () => {
        if (hasSignPad && isSign) {
            const base64 = canvasRef.current.canvasContainer.childNodes[1].toDataURL();
            handleClearCanvas();
            localStorage.setItem('signatureImage', base64); // WDS에 추가되기 전까지 임시로 local에 저장

            onClickSubmit && onClickSubmit();
        } else if (hasSignPad && !isSign) {
            toast.success('서명을 해주세요');
        } else {
            onClickSubmit && onClickSubmit();
        }
    };
    const handleDrawSign = () => {
        setIsSign(true);
    };

    return (
        <Background>
            <ScreenContainer {...rest}>
                <Header>
                    <Title>{header?.title}</Title>
                    <Content>{header?.content}</Content>
                </Header>
                <Body>
                    {resetButton && hasSignPad && (
                        <Button.Icon
                            source={<Refresh />}
                            shape="circle"
                            type="secondary"
                            className="resetButton"
                            onClick={handleClearCanvas}
                        />
                    )}
                    {hasSignPad && <SignatureCanvas ref={canvasRef} onChange={handleDrawSign} />}
                </Body>
                <Footer>
                    <Button size="large" height="50px" onClick={handleSubmit} block>
                        {footer?.submitTitle || '확인'}
                    </Button>
                </Footer>
            </ScreenContainer>
        </Background>
    );
}

const Background = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 1.5rem;
    background: ${BaseColor.Neutral900};
`;
const ScreenContainer = styled.div`
    position: relative;
    width: 100%;
    max-height: 90vh;
    height: fit-content;
    background: ${BaseColor.White};
`;
const Header = styled.div`
    padding: 1.5rem;
    border-bottom: 1px solid ${Color.Border};
`;
const Title = styled.h3`
    font-size: 1.4rem;
    font-weight: 800;
    color: ${Color.Text};
`;
const Content = styled.div<{ isPass?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Body = styled.div`
    position: relative;
    padding-bottom: 38px;
    .resetButton {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        z-index: 2;
    }
    > div,
    canvas {
        width: 100%;
        max-height: 50vh;
        /* min-height: 300px; */
    }
`;
const Footer = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    button {
        border-radius: 0px;
    }
`;
