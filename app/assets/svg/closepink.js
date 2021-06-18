import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg width={6.12} height={8.107} viewBox="0 0 6.12 8.107" {...props}>
            <G data-name="Group 40" fill="#7a2985">
                <Path
                    data-name="Path 24"
                    d="M1.331.166L2.493 0 1.162 7.756 0 7.922z"
                    transform="translate(-131.067 -235.491) rotate(30 -371.918 369.711)"
                />
                <Path
                    data-name="Path 23"
                    d="M0 0l1.162.166 1.331 7.756-1.162-.166z"
                    transform="translate(-131.067 -235.491) rotate(-30 507.293 -126.205)"
                />
            </G>
        </Svg>
    )
}

export default SvgComponent
