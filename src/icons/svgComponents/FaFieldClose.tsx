import * as React from 'react'
import { SVGProps } from 'react'
const SvgFaFieldClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      width={24}
      height={24}
      rx={12}
      fill="currentColor"
      fillOpacity={0.3}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m13.414 12 4.293-4.293a.999.999 0 1 0-1.414-1.414L12 10.586 7.707 6.293a.999.999 0 1 0-1.414 1.414L10.586 12l-4.293 4.293a.999.999 0 1 0 1.414 1.414L12 13.414l4.293 4.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L13.414 12Z"
      fill="currentColor"
    />
  </svg>
)
export default SvgFaFieldClose
