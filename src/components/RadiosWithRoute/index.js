import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { matchPath, withRouter } from 'dva/router';
import { Radio } from 'antd';

import { resolveUrl } from 'utils/tools';
import styles from './styles.less';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class RadiosWithRoute extends PureComponent {
  static propTypes = {
    links: PropTypes.array.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };
  static defaultProps = {
    url: null,
  }

  render() {
    let activeKey = '';
    // 判断tab的链接是否匹配url，如果匹配设为active
    this.props.links.some((item) => {
      const result = matchPath(this.props.location.pathname, {
        path: resolveUrl(this.props.path, item.path),
        // exact: false, // optional, defaults to false
        // strict: false, // optional, defaults to false
      });
      if (result !== null) {
        activeKey = item.path;
        return true;
      }
      return false;
    });

    return (
      <div className={styles.wrapper}>
        <RadioGroup
          value={activeKey}
          onChange={(e) => {
            const key = e.target.value;
            this.props.history.push(resolveUrl(this.props.url || this.props.path, key));
          }}
        >
          {
            this.props.links.map(item => (
              <RadioButton
                key={item.path}
                value={item.path}
              >
                {item.title}
              </RadioButton>
            ))
          }
        </RadioGroup>
      </div>
    );
  }
}

export default withRouter(RadiosWithRoute);
