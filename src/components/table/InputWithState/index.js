import React, { PureComponent } from 'react';
import { Input, Icon } from 'antd';
import styles from './style.less';

// 添加溢出时的省略号和tooltip
class InputWithState extends PureComponent {
  state = {
    value: '',
  }
  componentWillMount = () => {
    this.setState({ value: this.props.initValue });
  }

  render() {
    return (
      <div className={styles.inputWrapper}>
        <Input value={this.state.value} onChange={e => this.setState({ value: e.currentTarget.value })} />
        <Icon type="check" className={styles.save} onClick={() => { this.props.onSave(this.state.value); }} />
      </div>
    );
  }
}

export default InputWithState;
