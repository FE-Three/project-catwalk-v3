/* eslint-disable */
import React from 'react';
import { Chart } from 'react-google-charts';

const RatingBreakdown = ({ ratings }) => (
  <div className="chart-container">
    <Chart
      chartType="BarChart"
      width="100%"
      height="200px"
      loader={<div>Loading Chart</div>}
      data={[
        ['Stars', 'Value'],
        ['1 star', parseInt(ratings[1], 10)],
        ['2 star', parseInt(ratings[2], 10)],
        ['3 star', parseInt(ratings[3], 10)],
        ['4 star', parseInt(ratings[4], 10)],
        ['5 star', parseInt(ratings[5], 10)],
      ]}
      options={{
        legend: 'none',
      }}
    />
  </div>
);

export default RatingBreakdown;
