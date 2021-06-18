import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg width={28.702} height={28.702} viewBox="0 0 28.702 28.702" {...props}>
            <G data-name="Group 19504">
                <Path
                    data-name="Path 31124"
                    d="M14.351 0A14.351 14.351 0 110 14.351 14.351 14.351 0 0114.351 0z"
                    transform="translate(-309.309 -681.309) rotate(180 169.005 355.005)"
                    fill="#fff"
                />
                <G
                    data-name="Group 35"
                    transform="translate(-309.309 -681.309) translate(317.534 690.619)"
                    fill="#532280"
                >
                    <Path
                        data-name="Rectangle 30"
                        transform="rotate(-45 6.307 2.612)"
                        d="M0 0H7.389V2.099H0z"
                    />
                    <Path
                        data-name="Rectangle 31"
                        transform="rotate(45 -3.768 3.66)"
                        d="M0 0H7.389V2.099H0z"
                    />
                    <Path
                        data-name="Rectangle 32"
                        transform="rotate(180 5.888 3.15)"
                        d="M0 0H9.108V2.099H0z"
                    />
                </G>
            </G>
        </Svg>
    )
}

export default SvgComponent
