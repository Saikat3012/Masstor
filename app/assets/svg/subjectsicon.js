import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg width={17} height={17} viewBox="0 0 17 17" {...props}>
            <G data-name="Group 26652" transform="translate(-31 -458)">
                <Circle
                    data-name="Ellipse 6645"
                    cx={8.5}
                    cy={8.5}
                    r={8.5}
                    transform="translate(31 458)"
                    fill="#9b3189"
                />
                <Path
                    data-name="Path 40627"
                    d="M341.7 1298.659v8.787h-6.562c-.073-.012-.147-.021-.22-.036a1.4 1.4 0 01-1.089-1.348v-6.02a1.346 1.346 0 01.04-.318 1.394 1.394 0 011.367-1.064zm-3.882.52v3.725a.271.271 0 01-.068.193.258.258 0 01-.379 0c-.148-.143-.294-.289-.441-.434l-.32-.313-.038.036-.729.716a.257.257 0 01-.39-.026.3.3 0 01-.052-.19v-3.717a3.035 3.035 0 00-.343.023.884.884 0 00-.714.878v4.875h.012a1.459 1.459 0 01.93-.3H341.173v-5.466zm3.36 5.982h-5.934a1.006 1.006 0 00-.169.015.882.882 0 00-.7 1.086.9.9 0 00.887.667H341.182zm-3.881-2.86v-3.12h-1.375v3.122l.047-.045.437-.431a.26.26 0 01.408 0z"
                    transform="translate(-298.264 -836.552)"
                    fill="#fff"
                />
            </G>
        </Svg>
    )
}

export default SvgComponent