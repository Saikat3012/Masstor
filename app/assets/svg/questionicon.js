import * as React from "react"
import Svg, { G, Circle, Text, TSpan } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg width={17} height={19} viewBox="0 0 17 19" {...props}>
            <G data-name="Group 26657" transform="translate(-31 -608)">
                <Circle
                    data-name="Ellipse 6666"
                    cx={8.5}
                    cy={8.5}
                    r={8.5}
                    transform="translate(31 609)"
                    fill="#9b3189"
                />
                <Text
                    data-name="?"
                    transform="translate(36 623)"
                    fill="#fff"
                    fontSize={15}
                    fontFamily="Montserrat-Bold, Montserrat"
                    fontWeight={700}
                >
                    <TSpan x={0} y={0}>
                        {"?"}
                    </TSpan>
                </Text>
            </G>
        </Svg>
    )
}

export default SvgComponent