import * as React from "react"
import Svg, { Path, G } from "react-native-svg"

interface Props {
  diceSize: number;
  color: string;
}

function SvgComponent<Props>(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={props.diceSize} height={props.diceSize} viewBox="0 0 110 125" >      
      <G>
        <G fill={props.color}>
          <Path
            stroke="#000"
            strokeWidth={4.15728}
            d="M1.15 32.69L55.211.779l54.053 31.76-2.9 60.314-51.306 31.759L3.904 93.616 1.149 32.69z"
          />
          <Path
            stroke="#000"
            strokeWidth={0.8304}
            fill="none"
            d="M55.819 1.236L55.36 23.53M22.683 85.22l66.423.762M4.207 93.317l18.629-7.945 32.218 38.783L88.8 85.677l14.797 5.024M3.92 34.535l51.594-10.852 50.98 11.005-18.456 50.837L55.054 23.53 22.378 85.067 3.918 34.535z"
          />
        </G>
        
      </G>
    </Svg>
  )
}

export default SvgComponent
