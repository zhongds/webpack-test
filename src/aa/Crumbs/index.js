import { Breadcrumb } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';


class Crumbs extends React.Component {
  getFather = (data, pathname) => {
    let res = '';
    // 没有子菜单的特殊情况
    if (this.props.noSub) {
      const fatherTarget = pathname.split('/')[2];
      const filter = data.filter(val => val.url === fatherTarget);
      if (filter.length > 0) {
        res = filter[0].menu;
      }
      return res;
    }
    const target = pathname.split('/')[2];
    data.forEach((item) => {
      const filter = item.subMenu.filter(val => val.url === target);
      if (filter.length > 0) {
        res = item.menu;
      }
      return '';
    });
    return res;
  };
  getSon = (data, pathname) => {
    const target = pathname.split('/')[2];
    let res = '';
    data.forEach((item) => {
      if (!item.subMenu) {
        return '';
      }
      const filter = item.subMenu.filter(val => val.url === target);
      if (filter.length > 0) {
        res = filter[0].text;
      }
      return '';
    });
    return res;
  }
  render() {
    const { root, data, pathname } = this.props;
    return (
      <div className={styles.breadcrumb}>
        <Breadcrumb separator='>'>
          <Breadcrumb.Item>{root}</Breadcrumb.Item>
          <Breadcrumb.Item>{this.getFather(data, pathname)}</Breadcrumb.Item>
          <Breadcrumb.Item>{this.getSon(data, pathname)}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

Crumbs.propTypes = {
  data: PropTypes.array,
  root: PropTypes.string,
  pathname: PropTypes.string,
};

export default Crumbs;
