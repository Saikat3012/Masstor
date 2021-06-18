import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg width={16.34} height={14.494} viewBox="0 0 16.34 14.494" {...props}>
            <G
                data-name="Group 17"
                transform="translate(-410 -1231.638)"
                fill="#532280"
            >
                <Path
                    data-name="Rectangle 30"
                    transform="rotate(-45 1700.47 124.53)"
                    d="M0 0H10.253V2.913H0z"
                />
                <Path
                    data-name="Rectangle 31"
                    transform="rotate(45 -1286.948 1115.81)"
                    d="M0 0H10.253V2.913H0z"
                />
                <Path
                    data-name="Rectangle 32"
                    transform="rotate(180 213.17 620.19)"
                    d="M0 0H12.639V2.913H0z"
                />
            </G>
        </Svg>
    )
}

export default SvgComponent
