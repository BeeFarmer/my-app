import React, { Component } from 'react';
import MyTemplete  from '../../../templete';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, RadialChart} from 'react-vis';

class MyPie extends Component
{

  renderPie()
  {
    const myData = [
    {angle: 1, label: 'Type 1'},
    {angle: 2, label: 'Type 2'},
    {angle: 3, label: 'Type 3'},
    {angle: 4, label: 'Type 4'},
    {angle: 5, label: 'Type 5'},
    {angle: 6, label: 'Type 6'}
  ]
    return (
      <div>
        <RadialChart data={myData} width={500} height={600} showLabels/>
      </div>
    );
  }
  render()
  {
    let output = this.renderPie();
    let myName = "Pie";
    return(
      <div>
      <MyTemplete content = {output} name = {myName}/>
      </div>
    );
  }
}

export default MyPie;
