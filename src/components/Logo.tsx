import React from 'react';

interface LogoTwoProps {
  fillColor?: string;
  width?: number;
  height?: number;
}

export const Logo: React.FC<LogoTwoProps> = ({
  fillColor = '#ECC662',
  width = 100,
  height = 40,
}) => {
  return (
    <svg
      version="1.1"
      id="圖層_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 109 40"
      xmlSpace="preserve"
    >
      <style type="text/css">{`.st0{fill:${fillColor};}`}</style>
      <g>
        <path className="st0" d="M5.1,13v6.5c1.4,0,2.5-1,2.5-2.2v-6.5C6.3,10.8,5.1,11.8,5.1,13z" />
        <path className="st0" d="M5.1,23v6.5c1.4,0,2.5-1,2.5-2.2v-6.5C6.3,20.8,5.1,21.8,5.1,23z" />
        <path
          className="st0"
          d="M8.9,23.9v6.5c1.4,0,2.5-1,2.5-2.2v-6.5C10,21.7,8.9,22.7,8.9,23.9z"
        />
        <path
          className="st0"
          d="M8.9,13.9v6.5c1.4,0,2.5-1,2.5-2.2v-6.5C10,11.7,8.9,12.7,8.9,13.9z"
        />
        <path
          className="st0"
          d="M12.6,24.7v6.5c1.4,0,2.5-1,2.5-2.2v-6.5C13.7,22.6,12.6,23.5,12.6,24.7z"
        />
        <path
          className="st0"
          d="M12.6,14.7v6.5c1.4,0,2.5-1,2.5-2.2v-6.5C13.7,12.6,12.6,13.5,12.6,14.7z"
        />
        <path
          className="st0"
          d="M12.1,3.5c-3.8-0.1-7,2.7-7,6c1.3,0,2.4-0.6,2.9-1.6c0.7-1.3,2.3-2.2,4-2.2c2.4,0,4.3,1.8,4.3,3.9v26.9
		c1.4,0,2.5-1,2.5-2.2V9.6C18.9,6.3,15.9,3.6,12.1,3.5z"
        />
        <polygon
          className="st0"
          points="97.7,23.6 94.6,13.7 91.9,13.7 96.4,26.5 97.1,26.5 98.3,26.5 98.9,26.5 103.4,13.7 100.8,13.7 	"
        />
        <rect x="104.9" y="13.7" className="st0" width="2.4" height="12.8" />
        <path
          className="st0"
          d="M90.8,16.8c-0.5,0-0.9,0.1-1.2,0.3c-0.4,0.2-0.6,0.5-0.9,0.9c0,0,0,0.1-0.1,0.1L88.6,17h-2.2v9.5h2.3v-6.4
		c0.1-0.2,0.2-0.4,0.4-0.6c0.2-0.2,0.4-0.3,0.7-0.4c0.3-0.1,0.6-0.1,0.9-0.1c0.1,0,0.3,0,0.4,0c0.2,0,0.3,0,0.4,0.1l0-2.2
		c-0.1,0-0.2-0.1-0.4-0.1C91.1,16.8,91,16.8,90.8,16.8z"
        />
        <path
          className="st0"
          d="M31.4,17.8c0.1-0.5,0.3-1,0.5-1.3c0.2-0.4,0.5-0.6,0.9-0.8c0.4-0.2,0.8-0.3,1.2-0.3c0.6,0,1.1,0.1,1.5,0.3
		c0.4,0.2,0.6,0.5,0.8,0.9c0.2,0.4,0.3,0.8,0.4,1.4h2.4c-0.1-0.9-0.3-1.6-0.7-2.3c-0.4-0.7-1-1.2-1.7-1.6c-0.7-0.4-1.6-0.6-2.6-0.6
		c-0.8,0-1.5,0.1-2.2,0.4c-0.6,0.3-1.2,0.7-1.7,1.2c-0.5,0.5-0.8,1.2-1.1,1.9s-0.4,1.6-0.4,2.5v1c0,0.9,0.1,1.8,0.4,2.5
		c0.2,0.7,0.6,1.4,1,1.9c0.5,0.5,1,0.9,1.6,1.2c0.6,0.3,1.4,0.4,2.2,0.4c1,0,1.9-0.2,2.7-0.6c0.7-0.4,1.3-0.9,1.7-1.5
		c0.4-0.7,0.6-1.4,0.7-2.3h-2.4c-0.1,0.5-0.2,1-0.4,1.4c-0.2,0.4-0.5,0.6-0.9,0.8c-0.4,0.2-0.8,0.3-1.4,0.3c-0.5,0-0.9-0.1-1.3-0.3
		c-0.4-0.2-0.6-0.5-0.9-0.8c-0.2-0.4-0.4-0.8-0.5-1.3c-0.1-0.5-0.2-1.1-0.2-1.7v-1C31.3,18.9,31.3,18.3,31.4,17.8z"
        />
        <path
          className="st0"
          d="M68,18.1c-0.3-0.4-0.7-0.8-1.2-1c-0.5-0.2-1-0.3-1.6-0.3c-0.6,0-1.1,0.1-1.5,0.3c-0.4,0.2-0.7,0.5-1,0.8
		l-0.1-1h-2.2v13.2h2.3v-4.5c0.3,0.3,0.5,0.6,0.9,0.7c0.4,0.2,0.9,0.3,1.5,0.3c0.6,0,1.1-0.1,1.6-0.4c0.5-0.2,0.8-0.6,1.2-1
		c0.3-0.4,0.5-1,0.7-1.5c0.2-0.6,0.2-1.2,0.2-1.9v-0.2c0-0.7-0.1-1.4-0.2-2S68.3,18.6,68,18.1z M66.6,21.8c0,0.4,0,0.8-0.1,1.2
		c-0.1,0.4-0.2,0.7-0.3,1c-0.2,0.3-0.4,0.5-0.6,0.7c-0.3,0.2-0.6,0.2-0.9,0.2c-0.5,0-0.9-0.1-1.2-0.3c-0.3-0.2-0.5-0.5-0.6-0.8v-4
		c0.1-0.1,0.1-0.3,0.2-0.4c0.2-0.2,0.4-0.4,0.6-0.5c0.3-0.1,0.6-0.2,0.9-0.2c0.4,0,0.7,0.1,0.9,0.2c0.3,0.2,0.5,0.4,0.6,0.6
		c0.2,0.3,0.3,0.6,0.4,0.9c0.1,0.4,0.1,0.7,0.1,1.2V21.8z"
        />
        <path
          className="st0"
          d="M74.9,24.8c-0.1,0-0.3,0-0.4,0c-0.2,0-0.4,0-0.5-0.1c-0.2-0.1-0.3-0.2-0.3-0.3c-0.1-0.2-0.1-0.4-0.1-0.7v-5.1
		h1.7V17h-1.7v-2.3h-2.3V17h-1.5v1.7h1.5v5.3c0,0.7,0.1,1.2,0.3,1.6c0.2,0.4,0.5,0.7,0.9,0.9c0.4,0.2,0.8,0.3,1.4,0.3
		c0.3,0,0.6,0,0.8-0.1c0.2,0,0.5-0.1,0.7-0.2l0-1.7C75.2,24.7,75.1,24.8,74.9,24.8z"
        />
        <path
          className="st0"
          d="M58.5,24.3v-4.1c0-0.7-0.2-1.4-0.5-1.8c-0.3-0.5-0.8-0.8-1.3-1.1c-0.6-0.2-1.2-0.4-1.9-0.4
		c-0.6,0-1.2,0.1-1.7,0.2c-0.5,0.2-0.9,0.4-1.3,0.7c-0.3,0.3-0.6,0.6-0.8,0.9c-0.2,0.4-0.3,0.7-0.3,1.1H53c0-0.2,0.1-0.5,0.2-0.7
		c0.1-0.2,0.3-0.3,0.5-0.4c0.2-0.1,0.5-0.2,0.8-0.2c0.4,0,0.6,0.1,0.9,0.2c0.2,0.1,0.4,0.3,0.5,0.5c0.1,0.2,0.2,0.5,0.2,0.8v0.6
		h-1.2c-0.7,0-1.3,0.1-1.9,0.2c-0.5,0.1-1,0.3-1.4,0.6c-0.4,0.3-0.6,0.6-0.8,1c-0.2,0.4-0.3,0.8-0.3,1.3c0,0.5,0.1,1,0.4,1.5
		s0.7,0.8,1.2,1c0.5,0.2,1,0.4,1.7,0.4c0.5,0,0.9-0.1,1.3-0.2c0.4-0.2,0.7-0.3,0.9-0.6c0.1-0.1,0.2-0.2,0.3-0.3c0,0,0,0,0,0
		c0.1,0.4,0.1,0.7,0.3,0.9h2.4v-0.1c-0.1-0.2-0.2-0.5-0.3-0.9C58.5,25.1,58.5,24.7,58.5,24.3z M56.1,23.8c0,0.1-0.1,0.2-0.1,0.2
		c-0.2,0.2-0.4,0.4-0.7,0.6c-0.3,0.2-0.7,0.2-1.1,0.2c-0.3,0-0.5-0.1-0.7-0.2c-0.2-0.1-0.4-0.3-0.5-0.4c-0.1-0.2-0.2-0.4-0.2-0.6
		c0-0.2,0-0.5,0.1-0.6c0.1-0.2,0.2-0.4,0.4-0.5c0.2-0.1,0.4-0.2,0.7-0.3c0.3-0.1,0.6-0.1,1-0.1h1.1V23.8z"
        />
        <path
          className="st0"
          d="M83.8,18.1c-0.3-0.4-0.8-0.7-1.3-0.9c-0.5-0.2-1.1-0.3-1.8-0.3c-0.7,0-1.2,0.1-1.8,0.4c-0.5,0.2-1,0.6-1.4,1
		c-0.4,0.4-0.7,1-0.9,1.6c-0.2,0.6-0.3,1.3-0.3,2v0.4c0,0.6,0.1,1.2,0.3,1.8c0.2,0.6,0.5,1,0.9,1.5c0.4,0.4,0.9,0.7,1.5,1
		c0.6,0.2,1.2,0.4,1.9,0.4c0.6,0,1.2-0.1,1.6-0.2c0.5-0.2,0.9-0.4,1.2-0.7c0.3-0.3,0.6-0.6,0.8-0.8l-1.2-1.2c-0.3,0.4-0.6,0.7-1,0.9
		c-0.4,0.2-0.8,0.3-1.3,0.3c-0.4,0-0.7-0.1-1-0.2c-0.3-0.1-0.6-0.3-0.8-0.6c-0.2-0.3-0.4-0.5-0.5-0.9c-0.1-0.2-0.1-0.5-0.1-0.7h6.1
		v-1c0-0.7-0.1-1.3-0.3-1.9C84.4,19,84.1,18.5,83.8,18.1z M82.6,20.8h-3.8c0-0.1,0-0.3,0.1-0.4c0.1-0.4,0.2-0.7,0.4-1
		c0.2-0.3,0.4-0.5,0.6-0.6c0.3-0.2,0.6-0.2,0.9-0.2c0.4,0,0.8,0.1,1,0.3c0.3,0.2,0.5,0.4,0.6,0.7c0.1,0.3,0.2,0.6,0.2,1V20.8z"
        />
        <path
          className="st0"
          d="M48,17.6c-0.3-0.3-0.6-0.5-1-0.6c-0.4-0.1-0.8-0.2-1.3-0.2c-0.5,0-1,0.1-1.5,0.3c-0.4,0.2-0.8,0.5-1.1,0.9V13
		h-2.3v13.5h2.3v-6.8c0-0.1,0.1-0.2,0.1-0.3c0.2-0.3,0.4-0.4,0.7-0.6c0.3-0.1,0.6-0.2,1-0.2c0.3,0,0.6,0.1,0.9,0.2
		c0.2,0.1,0.4,0.3,0.6,0.6c0.1,0.3,0.2,0.6,0.2,1v6.1h2.3v-6.1c0-0.7-0.1-1.2-0.2-1.7C48.5,18.3,48.2,17.9,48,17.6z"
        />
      </g>
    </svg>
  );
};
