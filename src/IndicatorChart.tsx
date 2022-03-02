import React from 'react';
import { SafeMarkdown } from '@superset-ui/core';
import { ChartProps } from './types';


export default function IndicatorChart(chartProps: ChartProps) {
  const {
    markdowns,
    backgroundColors,
    textColor,
    itemMinWidth,
    roundedCorners,
    height,
    width,
  } = chartProps;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(${itemMinWidth}em, 1fr))`,
        gap: '1em',
        height: height,
        width: width,
      }}
    >
      {markdowns.map((markdown, index) => (
        <div
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: backgroundColors[index],
            borderRadius: roundedCorners ? '0.5em' : 0,
            color: textColor === 'light' ? 'gainsboro' : '#404040',
            padding: '1ex',
          }}
        >
          <SafeMarkdown source={markdown} />
        </div>
      ))}
    </div>
  );
}
