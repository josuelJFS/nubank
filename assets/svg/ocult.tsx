import * as React from "react"
import Svg, { Path } from "react-native-svg"

function IconOcultSVG(props: any) {
  return (
    <Svg
      width={32} height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.205 10.727s1.01 1.878 2.965 3.852m22.074-3.852s-.866 1.878-2.668 3.852m0 0c-1.415 1.55-3.406 3.16-6.006 3.966m6.006-3.966l2.668 2.569m-8.674 1.398a11.83 11.83 0 01-3.524.528c-1.393 0-2.678-.232-3.853-.62m7.377.091l1.612 3.097m-8.989-3.187c-2.527-.833-4.545-2.382-6.023-3.875m6.023 3.875l-1.284 3.187m-4.74-7.063l-2.322 2.569"
        stroke="#fff"
        strokeWidth={2.56818}
      />
    </Svg>
  )
}

export default IconOcultSVG;
