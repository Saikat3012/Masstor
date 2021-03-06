import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg width={4.637} height={7} viewBox="0 0 4.637 7" {...props}>
            <G data-name="Group 7062" fill="#9b3189">
                <Path
                    data-name="Path 13797"
                    d="M-540.9-488.213c-.086-.12-.164-.236-.248-.347-.361-.479-.727-.954-1.084-1.435a6.478 6.478 0 01-.73-1.206 2.14 2.14 0 01-.219-.957 2.3 2.3 0 011.87-2.18 2.326 2.326 0 012.653 1.529 1.938 1.938 0 01-.135 1.6 11.213 11.213 0 01-.995 1.513q-.513.685-1.029 1.368c-.03.028-.055.07-.083.115zm.038-2.606a1.035 1.035 0 001.044-1.039 1.038 1.038 0 00-1.056-1.021 1.035 1.035 0 00-1.027 1.033 1.032 1.032 0 001.036 1.027z"
                    transform="translate(543.186 494.383)"
                />
                <Path
                    data-name="Path 13798"
                    d="M-494.748-119.035c.113-.162.219-.318.33-.471.1-.134.2-.265.3-.4a.081.081 0 01.063-.03 1.836 1.836 0 01.7.282 1.029 1.029 0 01.1.078.469.469 0 010 .747 1.466 1.466 0 01-.63.321 3.031 3.031 0 01-1.8-.053 1.193 1.193 0 01-.516-.318.445.445 0 01.014-.657 1.52 1.52 0 01.773-.382c.017 0 .048.016.061.034.185.253.368.506.552.76z"
                    transform="translate(543.186 494.383) translate(-46.156 -368.99)"
                />
            </G>
        </Svg>
    )
}

export default SvgComponent
