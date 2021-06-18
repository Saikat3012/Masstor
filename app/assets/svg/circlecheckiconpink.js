import * as React from "react"
import Svg, { G, Path, Rect } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg width={8.831} height={8.831} viewBox="0 0 8.831 8.831" {...props}>
            <G data-name="Group 19608">
                <G data-name="Path 31226" fill="none">
                    <Path
                        d="M4.416 0A4.416 4.416 0 110 4.416 4.416 4.416 0 014.416 0z"
                        transform="translate(-30 -585) translate(30 585)"
                    />
                    <Path
                        d="M4.416.5A3.92 3.92 0 00.5 4.416 3.92 3.92 0 004.416 8.33 3.92 3.92 0 008.33 4.416 3.92 3.92 0 004.416.5m0-.5a4.416 4.416 0 110 8.831 4.416 4.416 0 010-8.831z"
                        fill="#9b3189"
                        transform="translate(-30 -585) translate(30 585)"
                    />
                </G>
                <G
                    data-name="Group 6995"
                    transform="translate(-30 -585) rotate(-18.01 1874.94 194.337)"
                    fill="#9b3189"
                >
                    <Rect
                        data-name="Rectangle 1332"
                        width={0.939}
                        height={2.505}
                        rx={0.47}
                        transform="rotate(-36 1.33 .432)"
                    />
                    <Rect
                        data-name="Rectangle 1333"
                        width={0.939}
                        height={4.384}
                        rx={0.47}
                        transform="rotate(-120 1.599 1.081)"
                    />
                </G>
            </G>
        </Svg>
    )
}

export default SvgComponent