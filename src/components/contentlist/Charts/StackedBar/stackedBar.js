import React, { Component } from 'react';
import MyTemplete  from '../../../templete';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines,VerticalBarSeries} from 'react-vis';

class MyStackedBar extends Component
{

  renderStackedBar()
  {
    const data1 = [
      {x: 'Apple', y: 20},
      {x: 'Banana', y: 10},
      {x: 'Orange', y: 5}
    ];

    const data2 = [
      {x: 'Apple', y: 10},
      {x: 'Banana', y: 20},
      {x: 'Orange', y: 10}
    ];

    const data3 = [
      {x: 'Apple', y: 20},
      {x: 'Banana', y: 10},
      {x: 'Orange', y: 10}
    ];

    return (
      <XYPlot margin={{Bottom: 70}} xType="ordinal" width={500} height={500} stackBy="y">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis  />
        <YAxis />
        <VerticalBarSeries
          data={data1}
        />
        <VerticalBarSeries
          data={data2}
        />
        <VerticalBarSeries
          data={data3}
        />
      </XYPlot>
    );
  }
  render()
  {
    let output = this.renderStackedBar();
    let myName = "Stacked Bar";
    return(
      <div>
      <MyTemplete content = {output} name = {myName}/>
      </div>
    );
  }
}

export default MyStackedBar;
