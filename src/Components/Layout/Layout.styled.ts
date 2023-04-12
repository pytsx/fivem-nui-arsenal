import styled from "@emotion/styled";
import { bg } from "../../assets";

export const LayoutContainerStyled = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${bg});
    background-size: 100vw 100vh;
    background-repeat: no-repeat;
`