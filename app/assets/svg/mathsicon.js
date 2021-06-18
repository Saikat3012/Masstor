import * as React from "react"
import Svg, { Defs, G, Rect, Path, Text, TSpan } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
    return (
        <Svg width={78} height={78} viewBox="0 0 78 78" {...props}>
            <Defs></Defs>
            <G data-name="Group 26654">
                <G transform="translate(-110 -487) translate(110 487)" filter="url(#a)">
                    <Rect
                        data-name="Rectangle 3795"
                        width={60}
                        height={60}
                        rx={13}
                        transform="translate(9 6)"
                        fill="#fff"
                    />
                </G>
                <G data-name="Group 25949" fill="#532280">
                    <G data-name="Group 25937">
                        <Path
                            data-name="Path 40597"
                            d="M-857.088 982.142h3a3.2 3.2 0 013.245 3.213q.021 3.012 0 6.024a3.206 3.206 0 01-3.214 3.212q-3 .018-5.991 0a3.206 3.206 0 01-3.248-3.28v-5.85a3.2 3.2 0 013.315-3.314h2.891zm-2.647 5.371v1.7h5.331v-1.7z"
                            transform="translate(-110 -487) translate(88 -1.929) translate(48 503.929) translate(863.299 -982.14)"
                        />
                        <Path
                            data-name="Path 40598"
                            d="M-863.311 1191.079v-2.96a3.2 3.2 0 013.237-3.257q2.978-.02 5.956 0a3.2 3.2 0 013.259 3.269q.014 2.908 0 5.816a3.2 3.2 0 01-3.377 3.359q-2.908.014-5.817 0a3.2 3.2 0 01-3.254-3.271c-.006-.987 0-1.973 0-2.96zm7.023 3.159v-2.359h2.356v-1.617h-2.374v-2.332h-1.586v2.366h-2.343v1.6h2.358v2.343z"
                            transform="translate(-110 -487) translate(88 -1.929) translate(48 503.929) translate(863.313 -1170.704)"
                        />
                        <Path
                            data-name="Path 40599"
                            d="M-652.354 1197.356h-2.926a3.2 3.2 0 01-3.269-3.221q-.019-3.029 0-6.059a3.2 3.2 0 013.151-3.163q3.047-.025 6.095 0a3.2 3.2 0 013.2 3.254v5.815a3.207 3.207 0 01-3.361 3.373q-1.444.002-2.89.001zm3.187-5.614h-6.31v1.539h6.31zm0-2.746h-6.313v1.528h6.313z"
                            transform="translate(-110 -487) translate(88 -1.929) translate(48 503.929) translate(672.85 -1170.747)"
                        />
                        <Path
                            data-name="Path 40600"
                            d="M-652.359 982.135c1 0 2-.006 3 0a3.2 3.2 0 013.234 3.256q.01 2.943 0 5.885a3.189 3.189 0 01-3.292 3.3q-2.943.021-5.886 0a3.2 3.2 0 01-3.267-3.261q-.02-2.977 0-5.955a3.2 3.2 0 013.26-3.234h2.96zm-.038 7.468c.408.619.785 1.2 1.172 1.771.067.1.17.242.26.245.654.021 1.309.011 2.01.011-.083-.126-.13-.2-.182-.277-.686-.977-1.369-1.957-2.064-2.928a.346.346 0 010-.482c.618-.841 1.222-1.692 1.829-2.541.068-.1.127-.2.218-.339-.6 0-1.119.014-1.64-.006a.562.562 0 00-.567.293c-.319.507-.67.994-1.036 1.53a9.524 9.524 0 01-.687-1.085 1.159 1.159 0 00-1.369-.742 8.937 8.937 0 01-1.21.01c.114.171.175.268.241.361.618.869 1.232 1.742 1.859 2.6a.323.323 0 010 .455c-.339.456-.656.928-.981 1.393l-1.233 1.763c.613 0 1.153-.01 1.694 0a.517.517 0 00.509-.271c.374-.572.764-1.142 1.174-1.764z"
                            transform="translate(-110 -487) translate(88 -1.929) translate(48 503.929) translate(672.879 -982.131)"
                        />
                    </G>
                    <Text
                        transform="translate(-110 -487) translate(88 -1.929) translate(48 543)"
                        fontSize={10}
                        fontFamily="Montserrat-SemiBold, Montserrat"
                        fontWeight={600}
                    >
                        <TSpan x={0} y={0}>
                            {"Math"}
                        </TSpan>
                    </Text>
                </G>
            </G>
        </Svg>
    )
}

export default SvgComponent