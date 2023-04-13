import React from "react"
import { gun_1 } from "../../assets"
import { Silhouette } from "../Silhouette"
import { CardOptionsContainerStyled, CardContainerStyled, CardWrapperStyled, CardOptionStyled, CardOptionsWrapper } from "./Card.styled"

export const Card = () => {
    const [hoverLeft, setHoverLeft] = React.useState(false)
    const [activeLeft, setActiveLeft] = React.useState(false)
    const [hoverRight, setHoverRight] = React.useState(false)
    const [activeRight, setActiveRight] = React.useState(false)

    return (
        <CardWrapperStyled>
            <CardOptionsWrapper
                onMouseEnter={() => setHoverLeft(prev => !prev)}
                onMouseLeave={() => setHoverLeft(prev => !prev)}
            >
                <CardOptionsContainerStyled isActive={hoverLeft || activeLeft} position='left' >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(item => (
                        <CardOptionStyled onClick={() => setActiveLeft(true)} key={item} />
                    ))}
                </CardOptionsContainerStyled>
            </CardOptionsWrapper>

            <CardContainerStyled>
                <Silhouette hoverble img={gun_1} />
            </CardContainerStyled>

            <CardOptionsWrapper
                onMouseEnter={() => setHoverRight(prev => !prev)}
                onMouseLeave={() => setHoverRight(prev => !prev)}
            >
                <CardOptionsContainerStyled isActive={hoverRight || activeRight} position='right'>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(item => (
                        <CardOptionStyled onClick={() => setActiveRight(true)} key={item} />
                    ))}
                </CardOptionsContainerStyled>
            </CardOptionsWrapper>
        </CardWrapperStyled>
    )
}
