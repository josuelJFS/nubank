<svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_24_185)">
    <path d="M29.0683 15.4091V5.13635H3.38647V21.8295H17.5115M30.3524 21.8295L25.216 26.9659M25.216 26.9659L20.0797 21.8295M25.216 26.9659V17.3352M18.7956 13.4829C18.7956 14.9013 17.6458 16.0511 16.2274 16.0511C14.809 16.0511 13.6592 14.9013 13.6592 13.4829C13.6592 12.0646 14.809 10.9148 16.2274 10.9148C17.6458 10.9148 18.7956 12.0646 18.7956 13.4829Z" stroke="white" stroke-width="2.56818" />
  </g>
  <defs>
    <clipPath id="clip0_24_185">
      <rect width="30.8182" height="30.8182" fill="white" transform="translate(0.818115)" />
    </clipPath>
  </defs>
</svg>
import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function IconDepositarSVG(props: any) {
  return (
    <Svg

      viewBox="0 0 32 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_24_185)">
        <Path
          d="M29.068 15.41V5.135H3.386V21.83h14.126m12.84 0l-5.136 5.136m0 0l-5.136-5.137m5.136 5.137v-9.63m-6.42-3.853a2.568 2.568 0 11-5.137 0 2.568 2.568 0 015.137 0z"
          stroke="#000000"
          strokeWidth={2.56818}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_24_185">
          <Path
            fill="#fff"
            transform="translate(.818)"
            d="M0 0H30.8182V30.8182H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default IconDepositarSVG;
