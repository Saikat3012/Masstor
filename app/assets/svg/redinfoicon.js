import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg width={9} height={9} viewBox="0 0 9 9" {...props}>
            <G data-name="Group 24298" transform="translate(-52.343 -357)">
                <Circle
                    data-name="Ellipse 6620"
                    cx={4.5}
                    cy={4.5}
                    r={4.5}
                    transform="translate(52.343 357)"
                    fill="#f66f6f"
                />
                <G data-name="Group 24297" fill="#fff">
                    <Path
                        data-name="Path 38675"
                        d="M814.4-830.092c.04-.13.079-.258.121-.384 0-.01.026-.018.04-.018l.623-.027 1.274-.053h.093l-.021.085-.878 3.285a2.791 2.791 0 00-.059.279.161.161 0 00.055.175.151.151 0 00.177-.019 1.749 1.749 0 00.232-.2 3.64 3.64 0 00.563-.819l.02-.036.011-.008.329.19c-.1.16-.192.319-.294.473a2.9 2.9 0 01-.677.744 1.39 1.39 0 01-.878.3.668.668 0 01-.683-.644 2.025 2.025 0 01.088-.706q.293-1.084.58-2.17a.968.968 0 00.03-.135.231.231 0 00-.158-.262 1.144 1.144 0 00-.266-.046c-.1-.008-.2 0-.3 0z"
                        transform="translate(55.731 357.912) translate(-814.403 832.943)"
                    />
                    <Path
                        data-name="Path 38676"
                        d="M925.327-1086.19a.739.739 0 01-.743.745.74.74 0 01-.745-.744.738.738 0 01.744-.744.736.736 0 01.744.743z"
                        transform="translate(55.731 357.912) translate(-922.828 1086.933)"
                    />
                </G>
            </G>
        </Svg>
    )
}

export default SvgComponent