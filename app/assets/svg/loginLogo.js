import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg width={99.92} height={78.493} viewBox="0 0 99.92 78.493" {...props}>
            <G data-name="Group 3">
                <Circle
                    data-name="Ellipse 3"
                    cx={9.057}
                    cy={9.057}
                    r={9.057}
                    transform="translate(40.903)"
                    fill="#f7f6f8"
                />
                <Circle
                    data-name="Ellipse 4"
                    cx={9.057}
                    cy={9.057}
                    r={9.057}
                    transform="translate(40.903 60.379)"
                    fill="#f7f6f8"
                />
                <G
                    data-name="Group 1"
                    transform="translate(11.468 42.265)"
                    fill="#f7f6f8"
                >
                    <Circle data-name="Ellipse 5" cx={9.057} cy={9.057} r={9.057} />
                    <Circle
                        data-name="Ellipse 6"
                        cx={9.057}
                        cy={9.057}
                        r={9.057}
                        transform="translate(58.87)"
                    />
                </G>
                <G data-name="Group 2">
                    <Path
                        data-name="Path 1"
                        d="M512.91 338.545c-3.844 5.1-9.479 5.424-15.145 5.847-10.143.765-19.593 2.777-24.514 13.334-1.389 2.979-4.4 5.283-7.3 5.263-2.9.02-5.907-2.284-7.3-5.263-4.921-10.556-14.37-12.569-24.514-13.334-5.666-.423-11.3-.745-15.145-5.847-6.159-8.2-2.455-18.255 7.5-20.448 9.439-2.083 16.333 2.566 23.035 8.262 4.73 4.015 9.711 7.789 16.423 7.8 6.712-.01 11.693-3.784 16.423-7.8 6.7-5.7 13.6-10.345 23.035-8.262 9.957 2.194 13.66 12.247 7.502 20.448z"
                        transform="translate(0 9.637) translate(-415.995 -317.59)"
                        fill="#f7f6f8"
                    />
                </G>
            </G>
        </Svg>
    )
}

export default SvgComponent
