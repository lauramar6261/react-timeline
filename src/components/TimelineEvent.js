import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  // Component functions always return JSX
  const timeStamp = props.timestamp
  const time = Timestamp(timeStamp)
  return (
  <section>
    <h3>{props.name}</h3>
    <h3>{props.status}</h3>
    <h3>{time}</h3>
  </section>
  );
}

export default TimelineEvent;
