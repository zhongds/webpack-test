import React, { PureComponent } from 'react';
import { NavLink, withRouter } from 'dva/router';
import { ACCESS_TOKEN } from 'config/constants';
import { Icon, Button } from 'antd';
import 'assets/styles/common.scss';
import styles from './Header.scss';

class Header extends PureComponent {
  state = {
    items: [
      { to: '/home', text: '首页', icon: 'home' },
      { to: '/announcement', text: '通知公告', icon: 'announcement' },
      { to: '/transaction', text: '业务办理', icon: 'orders' },
      { to: '/education', text: '警示教育', icon: 'waring' },
    ],
  }

  componentWillMount() {
    if (sessionStorage.getItem(ACCESS_TOKEN)) {
      this.setState({
        items: [
          { to: '/home', text: '首页', icon: 'home' },
          { to: '/announcement', text: '通知公告', icon: 'announcement' },
          { to: '/information', text: '信息中心', icon: 'list' },
          { to: '/transaction', text: '业务办理', icon: 'orders' },
          { to: '/warning-and-education', text: '警示教育', icon: 'waring' },
          { to: '/data-mgmt', text: '资料管理', icon: 'data' },
        ],
      });
    }
  }
  loginOut = () => {
    delete sessionStorage[ACCESS_TOKEN];
    window.location.replace('/home');
  }
  render() {
    const { items } = this.state;
    return (
      <div className={styles.wrapper}>
        <div className={styles.center}>
          {items.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
            >
              <Icon type={item.icon} />
              <span>{item.text}</span>
            </NavLink>
          ))}
        </div>
        {
          sessionStorage.getItem(ACCESS_TOKEN) ?
            <div className={styles.userInfo}>
              <div className={styles.userName}>
                <span>欢迎您:</span>
                <NavLink to='/userctl'>{sessionStorage.getItem(ACCESS_TOKEN)}</NavLink>
              </div>
              <div className={styles.btn}>
                <Button size='small' onClick={this.loginOut}>注销</Button>
              </div>
            </div> :
            <div className={styles.userInfo}>
              <div className={styles.userName}>
                <NavLink
                  to='/login'
                >
                  单位登录
                </NavLink>
              </div>
              <div className={styles.btn}>
                <NavLink to='/login'>申请账号</NavLink>
              </div>
            </div>
        }
      </div>
    );
  }
}

export default withRouter(Header);
