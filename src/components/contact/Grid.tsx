import React from "react";
import GridPattern from "./GridPattern";


export const Grid = ({ pattern, size }: { pattern?: number[][]; size?: number }) => {
    return (
      <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full">
        <GridPattern width={size ?? 20} height={size ?? 20} x="0" y="0" squares={pattern} />
      </div>
    );
  };