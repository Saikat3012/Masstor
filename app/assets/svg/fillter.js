import * as React from "react"
import Svg, { G, Rect } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg width={15.628} height={12.105} viewBox="0 0 15.628 12.105" {...props}>
            <G
                data-name="Group 19578"
                transform="translate(-329.372 -199)"
                fill="#451d6a"
            >
                <Rect
                    data-name="Rectangle 234"
                    width={12.24}
                    height={3.162}
                    rx={1.581}
                    transform="translate(332.76 203.472)"
                />
                <Rect
                    data-name="Rectangle 235"
                    width={8.627}
                    height={3.162}
                    rx={1.581}
                    transform="translate(336.373 207.943)"
                />
                <Rect
                    data-name="Rectangle 233"
                    width={15.628}
                    height={3.162}
                    rx={1.581}
                    transform="translate(329.372 199)"
                />
            </G>
        </Svg>
    )
}

export default SvgComponent
