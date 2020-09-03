import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  AreaSeries
} from 'react-vis';
import { random } from 'faker';

const random0to60 = () => random.number({ min: 0, max: 60 });
const generateSingleData = (num = 12) => {
  const d = [...Array(num)]
    .fill(1)
    .map((_, i) => ({
      x: i+1,
      y: random0to60()
    }))
  return d;
};

export const Chart = () => {
  return (
    <XYPlot width={300} height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <AreaSeries
        className="area-series-example"
        data={generateSingleData()}
      />
    </XYPlot>
  );
};
