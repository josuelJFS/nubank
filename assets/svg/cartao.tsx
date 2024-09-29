import * as React from "react"
import Svg, { Path } from "react-native-svg"

function IconCartaoSVG(props: any) {
  return (
    <Svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.153 10.91v2.567M13.66 27.602h6.42c2.837 0 5.137-2.3 5.137-5.136V10.909c0-2.837-2.3-5.136-5.137-5.136h-6.42a5.136 5.136 0 00-5.136 5.136v11.557c0 2.837 2.3 5.136 5.136 5.136z"
        stroke="#000000"
        strokeWidth={2.56818}
      />
    </Svg>
  )
}

export default IconCartaoSVG;
