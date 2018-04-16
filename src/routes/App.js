import React, { PureComponent } from 'react';
import Header from './Layout/Header';
import { Route, Switch, Redirect } from 'dva/router';
import routes from 'config/router.config';
import styles from './Layout/Layout.scss';
import { LoadingMask } from 'components';

console.log('styles', styles);

import { HorizontalList } from 'components/layout';

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);

class App extends PureComponent {
  state = {}
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <h3>广东省重点车辆管理服务平台</h3>
          </div>
          <Header />
        </div>
        <div className={styles.content}>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
            <Redirect to='/home' />
          </Switch>
        </div>
        <LoadingMask />
      </div>
    );
  }
}

export default App;
