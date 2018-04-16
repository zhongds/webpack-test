import React, { PureComponent } from 'react';
import { Spin } from 'antd';
import styles from './styles.less';

let mask;
let count = 0;

export default class LoadingMask extends PureComponent {
  static show = () => {
    if (!mask) return;

    count += 1;
    if (count > 0) {
      mask.setState({ isLoading: true });
    }
  };
  static hide = () => {
    if (!mask) return;

    count -= 1;
    if (count < 0) {
      count = 0;
    }
    if (count === 0) {
      mask.setState({ isLoading: false });
    }
  };
  state={
    isLoading: false,
  }
  componentDidMount = () => {
    mask = this;
  }
  render() {
    if (!this.state.isLoading) {
      return null;
    }
    return (
      <div className={styles.wrapper}>
        <div>
          <span className={styles.loading}>数据加载中</span>
          <Spin />
        </div>
      </div>
    );
  }
}

