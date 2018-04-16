import React, { PureComponent } from 'react';
import { Route, Redirect, Switch } from 'dva/router';
import dynamic from 'utils/dynamic';
import { TabsWithRoute, RadiosWithRoute } from 'components';
import TittleWithContent from 'components/layout/TittleWithContent';
import styles from './styles.scss';

/* eslint-disable max-len */
const routes = [
  {
    title: '警情公式',
    path: 'warning',
    childRoutes: [
      {
        title: '企业公示',
        path: 'company',
        component: dynamic({
          models: () => [import(/* webpackChunkName: "SituationWarningModel" */'models/WarningAndEducation/SituationWarningModel')],
          component: () => import(/* webpackChunkName: "SituationWarningCompany" */'./containers/SituationWarningCompany'),
        }),
      },
      {
        title: '驾驶员公示',
        path: 'driver',
        component: dynamic({
          models: () => [import(/* webpackChunkName: "SituationWarningModel" */'models/WarningAndEducation/SituationWarningModel')],
          component: () => import(/* webpackChunkName: "SituationWarningDriver" */'./containers/SituationWarningDriver'),
        }),
      },
      {
        title: '车辆公示',
        path: 'car',
        component: dynamic({
          models: () => [import(/* webpackChunkName: "SituationWarningModel" */'models/WarningAndEducation/SituationWarningModel')],
          component: () => import(/* webpackChunkName: "SituationWarningCar" */'./containers/SituationWarningCar'),
        }),
      },
    ],
  },
  {
    title: '在线学习',
    path: 'education',
    component: dynamic({
      models: () => [import(/* webpackChunkName: "EducationOnlineModel" */'models/WarningAndEducation/EducationOnlineModel')],
      component: () => import(/* webpackChunkName: "EducationOnline" */'./containers/EducationOnline'),
    }),
  },
];
/* eslint-enable max-len */

class WarningAndEducation extends PureComponent {
  state={}
  render() {
    console.log(routes);
    const { path } = this.props.match;
    return (
      <TittleWithContent>
        {/* 导航栏 */}
        <TabsWithRoute links={routes} path={path} />
        {/* 页面路由 */}
        <div className={styles.childRoutes}>
          <Switch>
            {routes.map(item => (
              <Route
                key={item.path}
                path={`${path}/${item.path}`}
                // 如果有子路由 则渲染子路由， 否则渲染 component属性对应的组件
                render={() => (
                  item.childRoutes ? (
                    <TittleWithContent>
                      {/* 子导航栏 */}
                      <RadiosWithRoute links={item.childRoutes} path={`${path}/${item.path}`} />
                      {/* 子路由 页面实际内容 */}
                      <div className={styles.content}>
                        <Switch>
                          {item.childRoutes.map(childRoute => (
                            <Route
                              key={childRoute.path}
                              path={`${path}/${item.path}/${childRoute.path}`}
                              component={childRoute.component}
                            />
                          ))}
                          <Redirect
                            path={`${path}/${item.path}`}
                            to={`${path}/${item.path}/${item.childRoutes[0].path}`}
                          />
                        </Switch>
                      </div>
                    </TittleWithContent>
                  ) : (
                    <item.component />
                  )
                )}
              />
            ))}
            <Redirect path={`${path}`} to={`${path}/${routes[0].path}`} />
          </Switch>
        </div>
      </TittleWithContent>
    );
  }
}

export default WarningAndEducation;

