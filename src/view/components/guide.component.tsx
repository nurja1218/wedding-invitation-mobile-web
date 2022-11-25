import { FaHandPointUp, FaHandPointDown } from "react-icons/fa";
import styled, { keyframes } from 'styled-components';
import { BaseColor } from '@wds-kit/core';
import { checkCurrentOS } from "../../lib/utils";

// 이전 버튼 안내의 이목을 모으기 위한 효과
function iosUpDownEffect() {
    return keyframes`
    0% {
        padding-top: 0px;
    }
    50% {
        padding-top: 20px;
    }
    100% {
        padding-top: 0px;
    }
    `;
}

function androidUpDownEffect() {
    return keyframes`
    0% {
        bottom: 10px;
    }
    50% {
        bottom: 30px;
    }
    100% {
        bottom: 10px;
    }
    `;
}

export function Guide() {
    const currentOS = checkCurrentOS();

    return (
        <>
            {/* ios 이전 버튼 안내부 */}
            {currentOS && currentOS.isIos && (
                <GuideButtonContent>
                    <GuideIosButton>
                        <span>
                            <IosButtonPoint />
                            이전 버튼을 터치하여
                            <br />
                            기본카메라로 돌아가세요
                        </span>
                    </GuideIosButton>
                </GuideButtonContent>
            )}
            {/* android 이전 버튼 안내부 */}
            {currentOS && currentOS.isAndroid && (
                <GuideButtonContent>
                    <GuideAndroidButton>
                        <span>
                            이전 버튼을 터치하여
                            <br />
                            기본카메라로 돌아가세요 <AndroidButtonPoint />
                            <br />
                        </span>
                    </GuideAndroidButton>
                </GuideButtonContent>
            )}
        </>
    );
}

const GuideButtonContent = styled.div`
    color: ${BaseColor.White};
    background-color: white;
`

const IosButtonPoint = styled(FaHandPointUp)`
    fill: white;
`;

const AndroidButtonPoint = styled(FaHandPointDown)`
    fill: white;
`;

const GuideIosButton = styled.div`
    position: fixed;
    color: #fff;
    left: 0;
    top: 10px;
    vertical-align: top;
    opacity: 1;
    margin-left: 10px;
    animation: ${iosUpDownEffect} 2s 1s infinite linear alternate;
    span{
        color: #fff;
    }
`;

const GuideAndroidButton = styled.div`
    position: fixed;
    color: #fff;
    right: 0;
    bottom: 10px;
    text-align: right;
    opacity: 1;
    margin-right: 10px;
    animation: ${androidUpDownEffect} 2s 1s infinite linear alternate;
    span{
        color: #fff;
    }
`;
