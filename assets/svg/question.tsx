import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function IconQUestionSVG(props: any) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.012 20.944h-2.354c.009-.746.08-1.355.216-1.83a3.8 3.8 0 01.695-1.316c.32-.396.747-.847 1.278-1.352.388-.365.742-.707 1.063-1.025.329-.326.594-.676.797-1.049.202-.38.303-.835.303-1.363 0-.536-.105-.998-.316-1.387a2.074 2.074 0 00-.91-.897c-.397-.21-.89-.315-1.48-.315-.49 0-.954.082-1.392.245a2.377 2.377 0 00-1.063.758c-.27.333-.41.772-.418 1.316h-2.34c.017-.878.253-1.631.708-2.26.464-.63 1.088-1.111 1.873-1.445.784-.334 1.661-.501 2.631-.501 1.071 0 1.982.178 2.733.536.759.357 1.336.87 1.733 1.538.396.66.595 1.445.595 2.354 0 .699-.157 1.343-.469 1.934a7.407 7.407 0 01-1.176 1.643c-.48.513-.991 1.002-1.53 1.468-.465.396-.777.843-.937 1.34a5.215 5.215 0 00-.24 1.608zM14.676 22.142v1.79h2.336v-1.79h-2.336z"
        fill="#fff"
      />
      <Circle
        cx={16.2274}
        cy={16.2273}
        r={12.8409}
        stroke="#fff"
        strokeWidth={2.56818}
      />
    </Svg>
  )
}

export default IconQUestionSVG;
