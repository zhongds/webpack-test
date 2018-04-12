import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import styles from './index.less';

console.log(styles)

const Panel = Collapse.Panel;
const customPanelStyle = {
  marginBottom: 3,
  border: 0,
  overflow: 'hidden',
  color: '#f6f6f6',
};

let permissions;
// 根据权限判断有没有
const permissionFilter = (arr, url = '') => {
  // 如果没有权限则从
  if (!permissions) {
    const permissionsStr = sessionStorage.getItem(PERMISSIONS);
    if (typeof permissionsStr === 'string' && permissionsStr !== '') {
      permissions = JSON.parse(permissionsStr);
    }
  }
  return arr.filter((item) => {
    const result = permissions.find(pm => pm.url === resolveUrl(url, item.baseUrl, item.url) && pm.scope === 'page');
    // 没有此权限项目，或者有权限
    if (result === undefined || result.havePermission) return true;
    return false;
  });
};

class Aside extends React.Component {

  componentDidMount = () => {
    this.didMount = true;
  }
  didMount = false;

  setActive = params => params.map((item, key) => (key + 1).toString());
  render() {
    const { data, checkPermissions } = this.props;
    return (
      // didMount 之前禁用antd动画效果
      <div className={`${styles.slider} ${this.didMount && styles.noAnimation}`}>
        <Collapse bordered={false} defaultActiveKey={this.setActive(data)}>
          {
            // 如需检查权限，过滤掉没有权限的项目不在导航中展示
            (checkPermissions ? permissionFilter(data) : data).map((item, index) => <Panel
              showArrow={false}
              header={<span>
                {
                  item.url ? (
                    <span>
                      <NavLink to={item.baseUrl + item.url} {...item.props}>
                        <Icon type={item.icon} />
                        <span className={styles.navText}>{item.menu}</span>
                      </NavLink>
                    </span>
                  ) : (
                    <span {...item.props}>
                      <Icon type={item.icon} />
                      <span className={styles.navText}>{item.menu}</span>
                    </span>
                  )
                }
              </span>}
              key={(index + 1).toString()}
              style={customPanelStyle}
            >
              {
                item.subMenu &&
                <ul>
                  {(checkPermissions ? permissionFilter(item.subMenu, item.baseUrl) : item.subMenu).map(val => (
                    <li key={val.url}>
                      <NavLink to={item.baseUrl + val.url} {...val.props}><Icon type={val.icon} />
                        <span className={styles.navText}>{val.text}</span>
                      </NavLink>
                    </li>
                    ))}
                </ul>
              }
            </Panel>,
            )
          }
        </Collapse>
      </div>
    );
  }
}

Aside.propTypes = {
  data: PropTypes.array,
  checkPermissions: PropTypes.bool,
};

export default Aside;
