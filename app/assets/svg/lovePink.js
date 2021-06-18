import * as React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
    return (
        <Svg width={15.846} height={15.006} viewBox="0 0 15.846 15.006" {...props}>
            <Defs></Defs>
            <G filter="url(#a)">
                <Path
                    data-name="Path 40"
                    d="M1185.818-2677.074a3.078 3.078 0 011.589-.944 2.694 2.694 0 013.319 2.565 4.133 4.133 0 01-1.11 2.693 28.136 28.136 0 01-2.94 2.919c-.251.231-.512.452-.757.688-.09.087-.134.081-.224 0a45.564 45.564 0 01-3.429-3.285 5.354 5.354 0 01-1.293-2.209 2.683 2.683 0 011.993-3.358 2.793 2.793 0 012.688.786l.13.128a.174.174 0 00.034.017z"
                    transform="translate(-1177.88 2680.09)"
                    fill="#9b3189"
                />
            </G>
        </Svg>
    )
}

export default SvgComponent
