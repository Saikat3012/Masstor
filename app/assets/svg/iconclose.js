import * as React from "react"
import Svg, { G, Circle, Rect } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg width={22} height={22} viewBox="0 0 22 22" {...props}>
            <G data-name="Group 26661">
                <G
                    data-name="Ellipse 6682"
                    transform="translate(-20 -116) translate(20 116)"
                    fill="#fff"
                    stroke="#532280"
                    strokeWidth={1}
                >
                    <Circle cx={11} cy={11} r={11} stroke="none" />
                    <Circle cx={11} cy={11} r={10.5} fill="none" />
                </G>
                <G
                    data-name="Group 25982"
                    transform="translate(-20 -116) translate(1.832 1.832)"
                    fill="#532280"
                >
                    <Rect
                        data-name="Rectangle 3852"
                        width={2.223}
                        height={12.595}
                        rx={1.111}
                        transform="rotate(45 -128.4 99.721)"
                    />
                    <Rect
                        data-name="Rectangle 3853"
                        width={2.223}
                        height={12.595}
                        rx={1.111}
                        transform="rotate(135 -9.459 71.593)"
                    />
                </G>
            </G>
        </Svg>
    )
}

export default SvgComponent