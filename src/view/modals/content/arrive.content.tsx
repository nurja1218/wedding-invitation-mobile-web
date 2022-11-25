import styled from "styled-components";

export function ModalContent({ remainSerials }: { remainSerials: string[] | undefined }) {

    return (
        <Content>
            <span style={{ display: "block", fontSize: "0.85rem" }}>
                모든 OTQ가 스캔되었습니다.
            </span>
        </Content>
    )
}

const Content = styled.div`
    margin-top: 1rem;
    padding: 0.5rem;
    background: #fff;
    color: #000;
    text-align: center;
`;
