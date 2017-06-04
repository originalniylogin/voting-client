import React from 'react';
import ReactDom from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];

ReactDOM.render(
    <Voting pair={pair} />,
    document.getElementById('app')
);
