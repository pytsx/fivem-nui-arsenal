import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";



// Define a cor neon principal
const mainNeonColor = '#FF00FF';

// Define as cores neon secundárias para a animação
const secondaryNeonColors = [
  '#FF1493', // pink
  '#00FFFF', // cyan
  '#00FF7F', // green
];

// Define a animação de box-shadow
const shadowAnimation = keyframes`
  0% {
    box-shadow: 0 0 10px -1px ${mainNeonColor},
  }
  25% {
    box-shadow: 0 0 10px -1px ${secondaryNeonColors[0]},
                0 0 10px -1px ${mainNeonColor};
  }
  50% {
    box-shadow: 0 0 10px -1px ${secondaryNeonColors[1]},
                0 0 10px -1px ${mainNeonColor};
  }
  75% {
    box-shadow: 0 0 10px -1px ${secondaryNeonColors[2]},
                0 0 10px -1px ${mainNeonColor};
  }
  100% {
    box-shadow: 0 0 10px -1px ${secondaryNeonColors[0]},
                0 0 10px -1px ${mainNeonColor};
  }
`;




export const CardWrapperStyled = styled.div`
    width: 40rem;
    height: 30rem;
    position: relative;
    display: flex;
    flex-direction: row;
`

export const CardContainerStyled = styled.div`
    height: 30rem;
    width: 30rem;
    backdrop-filter: blur(8px);
    background: #1d1d1d4f;
    position: relative;
    border-radius: .32rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1000ms ease-in-out;
    z-index: 100;
    // animation: ${shadowAnimation} 20s ease-in-out infinite alternate;

`;

interface ICardBorderStyled {
  left?: string
  right?: string
}

export const CardBorderStyled = styled.div<ICardBorderStyled>`
        position: absolute;
        height: 10%;
        width: 6rem;
        top: -1rem;
        left: ${props => props.left};
        right: ${props => props.right};
        background: #9d9d9d;
        z-index: 100;
`


export const CardOptionsWrapper = styled.div`
    width: 10rem;
    height: 100%;
    position: relative;
    overflow: hidden;
`

interface ICardOptionsContainerStyled {
  position?: string
  display?: string
  isActive?: boolean
}


export const CardOptionsContainerStyled = styled.ul<ICardOptionsContainerStyled>`
    width: 100%;
    height: 100%;
    position: absolute;
    transition: all 300ms ease-in-out;
    left: ${props =>
    props.position == 'left' && !props.isActive
      ? '7rem'
      : props.position == 'left' && props.isActive
        ? '1rem'
        : props.isActive
          ? '-1rem'
          : '-7rem'
  };
    border-radius: ${props => props.position == 'left' ? '.32rem 0 0 .32rem' : '0 .32rem .32rem 0'};
    padding: ${props => props.position == 'left' ? '.32rem .32rem .32rem .08rem ' : '.32rem .08rem .32rem .32rem'};
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    direction: ${props => props.position == 'left' ? 'rtl' : 'ltr'};
    display: ${props => props.display}
`
interface ICardOptionStyled {
  isActive?: boolean
}

export const CardOptionStyled = styled.li`

    width: 100%;
    height: 5rem;
    backdrop-filter: blur(10px);
    background: #1d1d1d0f;
    cursor: pointer;
    border-radius: .32rem;
    list-style: none;
    margin: .16rem 0rem;
    padding: .8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 

    &:hover {
      background: red;
    }
`



















