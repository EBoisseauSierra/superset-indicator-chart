import React from 'react';
import { SafeMarkdown } from '@superset-ui/core';
import { ChartProps } from './types';


export default function IndicatorChart(chartProps: ChartProps) {
  const {
    markdowns,
    backgroundColors,
    textColor,
    orientation,
    roundedCorners,
    height,
    width,
  } = chartProps;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        height: height,
        width: width,
        flexDirection: orientation === 'horizontal' ? 'row' : 'column',
      }}
    >
      {markdowns.map((markdown, index) => (
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap'
            alignItems: 'center',
            alignContent: 'space-between',
            justifyContent: 'space-between',
            backgroundColor: backgroundColors[index],
            borderRadius: roundedCorners ? '0.5em' : 0,
            color: textColor === 'light' ? 'gainsboro' : '#404040',
            marginBottom: orientation === 'horizontal' ? 0 : 10,
            marginRight: orientation === 'horizontal' ? 10 : 0,
            padding: '1ex',
          }}
        >
          <SafeMarkdown source={markdown} />
        </div>
      ))}
    </div>
  );
}
