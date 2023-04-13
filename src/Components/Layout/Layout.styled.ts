import styled from "@emotion/styled";
import { bg } from "../../assets";

export const LayoutContainerStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-image: url(${bg});
    background-size: 100vw 100vh;
    background-repeat: no-repeat;
`