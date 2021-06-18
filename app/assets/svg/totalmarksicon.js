import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg width={17} height={17} viewBox="0 0 17 17" {...props}>
            <G data-name="Group 26658" transform="translate(-31 -638)">
                <Circle
                    data-name="Ellipse 6667"
                    cx={8.5}
                    cy={8.5}
                    r={8.5}
                    transform="translate(31 638)"
                    fill="#9b3189"
                />
                <G data-name={1685357} fill="#fff">
                    <Path
                        data-name="Path 40594"
                        d="M119.633 147.66h.308l-.154-.4zm0 0"
                        transform="translate(36 642) translate(-117.534 -144.678)"
                    />
                    <Path
                        data-name="Path 40595"
                        d="M333 3.835h1.381L333 2.457zm0 0"
                        transform="translate(36 642) translate(-327.157 -2.414)"
                    />
                    <Path
                        data-name="Path 40596"
                        d="M5.317 1.948V0H0v8.985h7.265V1.948zM1.994 5.977l-.647-.566.347-.4.273.239.618-.628.375.369zm.966.515l-.966.983-.647-.566.347-.4.273.239.618-.628zm-.3-2.848l-.106-.276h-.6l-.106.276H1.3L2 2.059h.52l.693 1.585zm1.72-.985v.385h-.372v.362H3.6v-.362h-.373v-.385H3.6V2.3h.407v.362zm-.86 2.976v-.527h2.435v.526zm2.433.971v.526H3.521v-.526zm0-3.5v.526h-1.01v-.526zm0 0"
                        transform="translate(36 642)"
                    />
                </G>
            </G>
        </Svg>
    )
}

export default SvgComponent