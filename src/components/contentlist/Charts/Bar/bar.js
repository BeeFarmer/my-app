import React, { Component } from 'react';
import MyTemplete  from '../../../templete';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines,HorizontalBarSeries,VerticalBarSeries} from 'react-vis';

class MyBar extends Component
{

  renderBar()
  {
    const data1 = [
      {x: 20, y: 'Apple'},
      {x: 10, y: 'Banana'},
      {x: 15, y: 'Orange'}
    ];

    const data2 = [
      {x: 10, y: 'Apple'},
      {x: 20, y: 'Banana'},
      {x: 5, y: 'Orange'}
    ];

    return (
      <XYPlot margin={{left: 70}} yType="ordinal" width={500} height={500} xDomain={[0, 23]}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis  />
        <YAxis />
        <HorizontalBarSeries
          data={data1} 
        />
        <HorizontalBarSeries
          data={data2}
        />
      </XYPlot>
    );
  }
  render()
  {
    let output = this.renderBar();
    let myName = "Bar";
    return(
      <div>
      <MyTemplete content = {output} name = {myName}/>
      </div>
    );
  }
}

export default MyBar;
