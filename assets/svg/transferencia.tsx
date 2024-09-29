import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function IconTranferenciaSVG(props: any) {
  return (
    <Svg

      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_24_184)">
        <Path
          d="M28.25 15.41V5.135H2.568V21.83h14.125m2.568 1.926l5.137-5.137m0 0l5.136 5.137m-5.136-5.137v8.347m-6.42-13.483a2.568 2.568 0 11-5.137 0 2.568 2.568 0 015.136 0z"
          stroke="#000000"
          strokeWidth={2.56818}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_24_184">
          <Path fill="#fff" d="M0 0H30.8182V30.8182H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default IconTranferenciaSVG
