import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg width={7.883} height={5.018} viewBox="0 0 7.883 5.018" {...props}>
            <G data-name="Group 7056" fill="#9b3189">
                <Path
                    data-name="Path 13774"
                    d="M1415.573 408.132a4.393 4.393 0 013.31 1.466 8.223 8.223 0 01.7.9.3.3 0 010 .271 4.746 4.746 0 01-3.173 2.3 4.1 4.1 0 01-3.746-1.226 12.286 12.286 0 01-.871-1.052.239.239 0 010-.318 4.887 4.887 0 013.146-2.278 5.851 5.851 0 01.634-.063zm.132.936a1.571 1.571 0 101.556 1.581 1.567 1.567 0 00-1.561-1.581z"
                    transform="translate(-1411.735 -409.132) translate(0 1)"
                />
                <Path
                    data-name="Path 13775"
                    d="M1481.768 444.537c-.327.225-.406.5-.228.733s.453.23.778-.028a.867.867 0 01-.495.949.909.909 0 01-1.139-1.335.892.892 0 011.084-.319z"
                    transform="translate(-1411.735 -409.132) translate(-65.746 -34.731)"
                />
            </G>
        </Svg>
    )
}

export default SvgComponent
