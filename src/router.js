import React from 'react';
import { Router, Route, Switch, IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Login from './routes/Login/Login';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <IndexPage>
          <Route path="/home" component={Products} />
        </IndexPage>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
