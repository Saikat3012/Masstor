import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg width={8} height={6} viewBox="0 0 8 6" {...props}>
            <Path
                data-name="Polygon 9"
                d="M4 0l4 6H0z"
                transform="rotate(180 4 3)"
                fill={props.color ? props.color : "#fdfdfe"}
            />
        </Svg>
    )
}

export default SvgComponent