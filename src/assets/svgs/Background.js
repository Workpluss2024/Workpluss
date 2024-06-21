import * as React from "react"
import Svg, { G, Ellipse, Defs, ClipPath, Path, Rect } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const Background = ( props ) => {
    return (
        <Svg
            width={336}
            height={456}
            viewBox="0 0 336 456"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_2_1830)">
                <G opacity={0.6}>
                    <G filter="url(#filter0_f_2_1830)">
                        <Ellipse
                            cx={83.0344}
                            cy={85.4788}
                            rx={83.0344}
                            ry={85.4788}
                            transform="matrix(0.617234 -0.786779 0.547705 0.836671 0 216.241)"
                            fill="#F33A14"
                        />
                    </G>
                    <G filter="url(#filter1_f_2_1830)">
                        <Ellipse
                            cx={83.0344}
                            cy={85.4788}
                            rx={83.0344}
                            ry={85.4788}
                            transform="matrix(0.617234 -0.786779 0.547705 0.836671 0 216.241)"
                            fill="#F33A14"
                        />
                    </G>
                    <G filter="url(#filter2_f_2_1830)">
                        <Ellipse
                            cx={75.7993}
                            cy={91.9087}
                            rx={75.7993}
                            ry={91.9087}
                            transform="matrix(0.816881 0.576806 -0.340905 0.940098 211.327 100.779)"
                            fill="#4D14B4"
                        />
                    </G>
                    <G filter="url(#filter3_f_2_1830)">
                        <Ellipse
                            cx={75.7993}
                            cy={134.328}
                            rx={75.7993}
                            ry={134.328}
                            transform="matrix(0.816881 0.576806 -0.340905 0.940098 211.327 100.779)"
                            fill="#4D14B4"
                        />
                    </G>
                    <G filter="url(#filter4_f_2_1830)">
                        <Ellipse
                            cx={83.0344}
                            cy={85.4788}
                            rx={83.0344}
                            ry={85.4788}
                            transform="matrix(0.617234 -0.786779 0.547705 0.836671 67.1398 130.659)"
                            fill="#149D33"
                        />
                    </G>
                    <G filter="url(#filter5_f_2_1830)">
                        <Ellipse
                            cx={83.0344}
                            cy={85.4788}
                            rx={83.0344}
                            ry={85.4788}
                            transform="matrix(0.617234 -0.786779 0.547705 0.836671 62.735 312.075)"
                            fill="#F09216"
                        />
                    </G>
                </G>
            </G>
            <Defs>
                <ClipPath id="clip0_2_1830">
                    <Rect width={335.165} height={455.111} fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default Background;
