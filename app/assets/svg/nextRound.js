import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            data-name="Component 9 \u2013 2"
            width={41}
            height={41}
            viewBox="0 0 41 41"
            {...props}
        >
            <G data-name="Ellipse 22" fill="none" stroke="#532280" strokeWidth={2}>
                <Circle cx={20.5} cy={20.5} r={20.5} stroke="none" />
                <Circle cx={20.5} cy={20.5} r={19.5} />
            </G>
            <G
                data-name="Group 35"
                transform="rotate(180 219.5 629.567)"
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
