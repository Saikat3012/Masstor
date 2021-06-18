import * as React from "react"
import Svg, { G, Path, Rect } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg width={14.169} height={14.169} viewBox="0 0 14.169 14.169" {...props}>
            <G data-name="Group 24999">
                <Path
                    data-name="Path 31226"
                    d="M7.084 0A7.084 7.084 0 110 7.084 7.084 7.084 0 017.084 0z"
                    transform="translate(-30 -585) translate(30 585)"
                    fill="#3c9b31"
                />
                <G
                    data-name="Group 6995"
                    transform="translate(-30 -585) rotate(-18.01 1882.891 192.034)"
                    fill="#fff"
                >
                    <Rect
                        data-name="Rectangle 1332"
                        width={1.507}
                        height={4.019}
                        rx={0.754}
                        transform="rotate(-36 2.135 .694)"
                    />
                    <Rect
                        data-name="Rectangle 1333"
                        width={1.507}
                        height={7.034}
                        rx={0.754}
                        transform="rotate(-120 2.565 1.734)"
                    />
                </G>
            </G>
        </Svg>
    )
}

export default SvgComponent