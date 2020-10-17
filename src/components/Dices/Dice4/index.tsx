import * as React from "react"
import Svg, { Path, G } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

interface Props {
  diceSize: number;
  color: string;
}


function SvgComponent<Props>(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={props.diceSize} height={props.diceSize} viewBox="0 0 122 105">
      <Path fill="none" d="M-1-1h124v107H-1z" />
      <G>
        <Path d="M-634.5-1082H464v454.57H-634.5z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path
          stroke="#000"
          strokeWidth={3.225}
          fill={props.color}
          d="M1.612 100.14l4.056 3.817h112.37l2.56-4.433L65.313 1.61h-4.533L1.612 100.14z"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
