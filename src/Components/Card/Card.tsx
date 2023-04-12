import React from "react"
import { gun_1 } from "../../assets"
import { Silhouette } from "../Silhouette"
import { CardOptionsContainerStyled, CardContainerStyled, CardWrapperStyled, CardOptionStyled, CardOptionsWrapper } from "./Card.styled"
export const Card = () => {
    const [hoverLeft, setHoverLeft] = React.useState(false)
    const [hoverRight, setHoverRight] = React.useState(false)

    return (
        <CardWrapperStyled>
            <CardOptionsWrapper
                onMouseEnter={() => setHoverLeft(prev => !prev)}
                onMouseLeave={() => setHoverLeft(prev => !prev)}

            >
                <CardOptionsContainerStyled hover={hoverLeft} position='left' >
                    {
                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(item => (
                            <CardOptionStyled >

                                <Silhouette img={gun_1} />
                            </CardOptionStyled>
                        ))
                    }
                </CardOptionsContainerStyled>
            </CardOptionsWrapper>



            <CardContainerStyled>
                <Silhouette hoverble img={gun_1} />

            </CardContainerStyled>



            <CardOptionsWrapper
                onMouseEnter={() => setHoverRight(prev => !prev)}
                onMouseLeave={() => setHoverRight(prev => !prev)}
            >
                <CardOptionsContainerStyled hover={hoverRight} >
                    {
                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(item => (
                            <CardOptionStyled>
                                <Silhouette img={gun_1} />

                            </CardOptionStyled>
                        ))
                    }
                </CardOptionsContainerStyled>
            </CardOptionsWrapper>
        </CardWrapperStyled>
    )
}