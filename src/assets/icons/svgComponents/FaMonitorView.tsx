import * as React from 'react';
import { SVGProps } from 'react';
const SvgFaMonitorView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.667 9.667c0 .459-.374.833-.834.833H3.167a.834.834 0 0 1-.834-.833V3c0-.46.374-.833.834-.833h11.666c.46 0 .834.374.834.833v6.667ZM14.833.5H3.167A2.503 2.503 0 0 0 .667 3v6.667c0 1.378 1.121 2.5 2.5 2.5h5v1.666H4.833a.836.836 0 0 0-.833.834c0 .458.375.833.833.833h8.334a.836.836 0 0 0 .833-.833.836.836 0 0 0-.833-.834H9.833v-1.666h5c1.379 0 2.5-1.122 2.5-2.5V3c0-1.378-1.121-2.5-2.5-2.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgFaMonitorView;
