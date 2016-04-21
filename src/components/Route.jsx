import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import HelloWorld from './HelloWorld.jsx';
import TodoList from './TodoList.jsx';

class RouteComponent extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/">
          <IndexRoute component={HelloWorld}/>
          <Route path="todo" component={TodoList}/>
        </Route>
      </Router>
    );
  }
}

export default RouteComponent;
