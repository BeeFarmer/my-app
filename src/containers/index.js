import React, { Component } from 'react';
import '../App.css';
import { ContainedButtons } from '../components/';
import { SimpleTable } from '../components/';
import { FontAwesome } from '../components/';

function App() {
    return (
      <div className="App">
        hello;
        <ContainedButtons></ContainedButtons>
        <SimpleTable></SimpleTable>
        <FontAwesome></FontAwesome>
      </div>
    );
}

export default App;
