import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import PropTypes from 'prop-types';
import Error404 from 'routes/Error404';
import App from './routes/App';
// 设置antd语言包为中文
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import dynamic from 'utils/dynamic';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <LocaleProvider locale={zhCN}>
        <Switch>
          <Route exact path='/error404' component={Error404} />
          <Route
            path='/login'
            component={dynamic({
              models: () => [import(/* webpackChunkName: "LoginModel" */'models/LoginModel')],
              component: () => import(/* webpackChunkName: "Login" */'routes/Login'),
            })}
          />
          <Route
            path='/'
            component={App}
          />
        </Switch>
      </LocaleProvider>
    </Router>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object.isRequired,
};

export default RouterConfig;
