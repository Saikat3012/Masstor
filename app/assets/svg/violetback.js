import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg width={12.56} height={11.141} viewBox="0 0 12.56 11.141" {...props}>
            <G
                data-name="Group 6237"
                transform="translate(-410 -1231.638)"
                fill="#532280"
            >
                <Path
                    data-name="Rectangle 30"
                    transform="rotate(-45 1698.446 123.692)"
                    d="M0 0H7.881V2.239H0z"
                />
                <Path
                    data-name="Rectangle 31"
                    transform="rotate(45 -1285.739 1114.637)"
                    d="M0 0H7.881V2.239H0z"
                />
                <Path
                    data-name="Rectangle 32"
                    transform="rotate(180 211.28 619.179)"
                    d="M0 0H9.715V2.239H0z"
                />
            </G>
        </Svg>
    )
}

export default SvgComponent