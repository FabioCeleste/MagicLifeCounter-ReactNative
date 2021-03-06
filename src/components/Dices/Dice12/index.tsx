import * as React from "react"
import Svg, { Path, G, Text } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

interface Props {
    diceSize: number;
    color: string;
  }

function SvgComponent<Props>(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={props.diceSize} height={props.diceSize} viewBox="0 0 119 112">
      <Path fill="none" d="M-1-1h121v114H-1z" />
      <G>
        <Path d="M-634.5-1082H464v454.57H-634.5z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-643.97-1096.2h421.42v303.05h-421.42z" />
        <Path d="M-643.97-1096.2h279.37v222.55h-279.37z" />
        <Path d="M-643.97-1096.2h312.52v227.28h-312.52z" />
        <Path d="M-643.97-1096.2h411.95v250.96h-411.95z" />
        <Path
          stroke="#000"
          strokeWidth={4.952}
          fill={props.color}
          d="M60.604 111.13l33.97-8.345 23.883-36.238-2.749-31.304-22.247-26.86-32.307-6.801-34.44 7.51L5.281 36.756 2.167 66.798l21.983 35.539 36.454 8.793z"
        />
        <Path
          stroke="#000"
          strokeWidth={1.761}
          fill={props.color}
          d="M27.765 50.86l10.228 36.563 43.896.165 10.249-36.6-30.919-23.74L27.765 50.86z"
        />
        <Path
          stroke="#000"
          strokeWidth={1.857}
          fill="red"
          d="M61.154 1.95l-.183 25.83M28.287 52.37L3.91 36.65M38.233 87.16l-14.45 16.64M81.683 87.71l13.267 15.263M92.251 51.45l22.939-15.93"
        />
        <Path d="M-643.97-1096.2h411.95v250.96h-411.95z" />
        <Path d="M-643.97-1096.2h411.95v250.96h-411.95z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1200.4h374.07v303.05h-374.07z" />
        <Path d="M-691.32-1200.4h288.84v250.96h-288.84z" />
        <Path d="M-691.32-1205.2h255.7v298.31h-255.7z" />
        <Path d="M-691.32-1200.4h303.05v307.78h-303.05z" />
      </G>
    </Svg>
  )
}

export default SvgComponent
