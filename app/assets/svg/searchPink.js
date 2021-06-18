import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg width={18.202} height={18.435} viewBox="0 0 18.202 18.435" {...props}>
            <Path
                data-name="Path 20"
                d="M220.975 927.848c.339.337.671.667 1 1l3.149 3.151a1.7 1.7 0 01-.58 2.814 1.643 1.643 0 01-1.848-.406q-2.039-2.026-4.063-4.065a.2.2 0 00-.3-.046 7.349 7.349 0 113.7-7.719 7.236 7.236 0 01-.961 5.1zm-6.179-9.066a5.075 5.075 0 105.078 5.074 5.083 5.083 0 00-5.074-5.074z"
                transform="translate(-207.439 -916.504)"
                fill="#9b3189"
            />
        </Svg>
    )
}

export default SvgComponent
