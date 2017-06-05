import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, hashHistory} from 'react-router-dom';
import App from './components/App';
import Voting from './components/Voting';
import Results from './components/Results';

const routes = (<Route component={App}>
  <Route path="/results" component={Results} />
  <Route path="/" component={Voting} />
</Route>);

ReactDOM.render(
    <BrowserRouter>{routes}</BrowserRouter>,
    document.getElementById('app')
);
