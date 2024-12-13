import React from "react";

export default function GridPattern({ width, height, x, y, squares }: any) {
    return (
      <svg aria-hidden="true" width={width} height={height}>
        {squares.map(([xCoord, yCoord]: any, idx: number) => (
          <rect
            key={`${xCoord}-${yCoord}-${idx}`}
            strokeWidth="0"
            width={width}
            height={height}
            x={xCoord * width}
            y={yCoord * height}
          />
        ))}
      </svg>
    );
  }