import React, { Component } from 'react';

const Status = (props) => {
  // Component functions always return JSX
  return (
  <section>
    <h3>{props.name}</h3>
    <h3>{props.status}</h3>
    <h3>{props.timestamp}</h3>
  </section>
  );
};

export default Status;
