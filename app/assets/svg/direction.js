import * as React from "react"
import Svg, { Path, G, Rect } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            data-name="Component 12 \u2013 1"
            width={22.129}
            height={22.129}
            viewBox="0 0 22.129 22.129"
            {...props}
        >
            <Path
                data-name="Path 22"
                d="M210.149-19.519a8.27 8.27 0 00-8.27 8.27 8.27 8.27 0 008.27 8.27 8.27 8.27 0 008.27-8.27 8.27 8.27 0 00-8.27-8.27zm0 13.937a5.667 5.667 0 01-5.667-5.667 5.667 5.667 0 015.667-5.667 5.667 5.667 0 015.667 5.667 5.667 5.667 0 01-5.667 5.667z"
                transform="translate(-199.084 22.314)"
                fill="#522180"
            />
            <G data-name="Group 37" transform="translate(10.153)" fill="#522180">
                <Rect
                    data-name="Rectangle 57"
                    width={1.823}
                    height={4.352}
                    rx={0.912}
                />
                <Rect
                    data-name="Rectangle 58"
                    width={1.823}
                    height={4.352}
                    rx={0.912}
                    transform="translate(0 17.777)"
                />
            </G>
            <G data-name="Group 38" transform="translate(0 10.153)" fill="#522180">
                <Rect
                    data-name="Rectangle 59"
                    width={1.823}
                    height={4.352}
                    rx={0.912}
                    transform="rotate(90 11.065 11.065)"
                />
                <Rect
                    data-name="Rectangle 60"
                    width={1.823}
                    height={4.352}
                    rx={0.912}
                    transform="rotate(90 2.176 2.176)"
                />
            </G>
        </Svg>
    )
}

export default SvgComponent
