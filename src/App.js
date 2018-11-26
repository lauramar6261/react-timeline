import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';


// const data = [
//   {
//     name: 'laura',
//     status: 'hellow world',
//     timestamp: '2 days ago',
//   }
// ]

class App extends Component {
  render() {
    console.log(timelineData.events);
      return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ada Lovelace's social media</h1>
        </header>
        <main className="App-main">
        <Timeline data={timelineData} />
        </main>
      </div>
    );
  }
}

export default App;
