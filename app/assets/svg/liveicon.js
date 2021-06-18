import * as React from "react"
import Svg, { G, Rect, Text, TSpan, Circle } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg width={55} height={22} viewBox="0 0 55 22" {...props}>
            <G data-name="Group 25963">
                <G
                    data-name="Rectangle 3819"
                    transform="translate(-294 -116) translate(294 116)"
                    fill="#fff"
                    stroke="#707070"
                    strokeWidth={1}
                >
                    <Rect width={55} height={22} rx={11} stroke="none" />
                    <Rect x={0.5} y={0.5} width={54} height={21} rx={10.5} fill="none" />
                </G>
                <G
                    data-name="Group 25962"
                    transform="translate(-294 -116) translate(1)"
                    fill="#009436"
                >
                    <Text
                        transform="translate(314 132)"
                        fontSize={13}
                        fontFamily="Montserrat-Medium, Montserrat"
                        fontWeight={500}
                    >
                        <TSpan x={0} y={0}>
                            {"Live"}
                        </TSpan>
                    </Text>
                    <Circle
                        data-name="Ellipse 6671"
                        cx={4}
                        cy={4}
                        r={4}
                        transform="translate(301 123)"
                    />
                </G>
            </G>
        </Svg>
    )
}

export default SvgComponent