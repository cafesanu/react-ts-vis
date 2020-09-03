import React, {useState} from 'react';
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

const generateData = (num = 12) => {
  return [
    generateSingleData(num),
    generateSingleData(num),
    generateSingleData(num),
    generateSingleData(num),
  ]
};

export const Chart = () => {
  const [data, setData] = useState(generateData())
  const [stacked, setStacked] = useState(true);

  const xyPlotPros: Record<string, string> = {};

  if(stacked) {
    xyPlotPros.stackBy = "y"
  }

  return (
    <div>
    <h1>React Vis</h1>
      <button
        style={{ marginRight: '5px' }}
        onClick={() => {
          setStacked((val) => !val);
        }}
      >
        Stacked? ({stacked ? "true": "false"})
      </button>
    <button
      style={{ marginRight: '5px' }}
      onClick={() => {
        setData(generateData(12));
      }}
    >
      12 points (for months)
    </button>
    <button
      style={{ marginRight: '5px' }}
      onClick={() => {
        setData(generateData(24));
      }}
    >
      24 points (for day)
    </button>
    <button
      style={{ marginRight: '5px' }}
      onClick={() => {
        setData(generateData(31));
      }}
    >
      31 points (for month)
    </button>
    <XYPlot
      {...xyPlotPros}
      animation
      xType={"ordinal"}
      width={900}
      height={400}
    >
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <AreaSeries
        color="#45227B"
        className="area-series-example"
        data={data[0]}
      />
      <AreaSeries
        color="#6E36C5"
        className="area-series-example"
        data={data[1]}
      />
      <AreaSeries
        color="#8A43F6"
        className="area-series-example"
        data={data[2]}
      />
      <AreaSeries
        color="#A06DEE"
        className="area-series-example"
        data={data[3]}
        
      />
    </XYPlot>
    </div>
  );
};
