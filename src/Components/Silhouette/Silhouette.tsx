import React from "react"
interface ISilhouette {
    img: any
    hoverble?: boolean
}
export const Silhouette = ({ img, hoverble = false }: ISilhouette) => {
    const [hover, setHover] = React.useState(false)

    const handleHover = () => {
        if (hoverble) {
            setHover(true)
        }
    }
    return (
        <div
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            style={{
                width: '80%',
                height: 'fit-content',
                padding: '.4rem',
                cursor: 'pointer',
            }}>
            <img

                style={{
                    filter: hover ? 'contrast(100%) brightness(125%)' : 'contrast(100%) brightness(10%)',
                    transition: 'all 300ms ease-in-out',
                    height: 'fit-content',
                    width: '100%',

                }}
                src={img}
            />
        </div>
    )
}