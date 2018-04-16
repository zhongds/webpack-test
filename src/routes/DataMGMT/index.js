import React, { PureComponent } from 'react';
import { Route, Redirect, Switch } from 'dva/router';
import dynamic from 'utils/dynamic';
import { TabsWithRoute } from 'components';
import TittleWithContent from 'components/layout/TittleWithContent';
import styles from './styles.scss';

const routes = [
  {
    title: '车辆管理',
    path: 'car-mgmt',
    component: dynamic({
      models: () => [import(/* webpackChunkName: "DataMgmtModel" */'models/DataMGMT/DataMgmtModel')],
      component: () => import(/* webpackChunkName: "CarMGMT" */'./containers/CarMGMT'),
    }),
  },
  {
    title: '驾驶员管理',
    path: 'driver-mgmt',
    component: dynamic({
      models: () => [import(/* webpackChunkName: "DataMgmtModel" */'models/DataMGMT/DataMgmtModel')],
      component: () => import(/* webpackChunkName: "DriverMGMT" */'./containers/DriverMGMT'),
    }),
  },
  {
    title: '企业资料',
    path: 'company-info',
    component: dynamic({ component: () => import(/* webpackChunkName: "CompanyInfo" */'./containers/CompanyInfo') }),
  },
];

class DataMGMT extends PureComponent {
  state={}
  render() {
    console.log(routes);
    const { path } = this.props.match;
    return (
      <TittleWithContent>
        <TabsWithRoute links={routes} path={path} />
        <div className={styles.content}>
          <Switch>
            {routes.map(item => (
              <Route
                key={item.path}
                path={`${path}/${item.path}`}
                component={item.component}
              />
            ))}
            <Redirect path={`${path}/`} to={`${path}/car-mgmt`} />
          </Switch>
        </div>
      </TittleWithContent>
    );
  }
}

export default DataMGMT;
