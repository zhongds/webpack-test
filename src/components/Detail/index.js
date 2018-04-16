import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.less';
import { convertObjToStr } from 'utils/tools';

class Detail extends PureComponent {
  static propTypes = {
    record: PropTypes.object.isRequired,
    config: PropTypes.array.isRequired,
  };

  render() {
    const record = this.props.record;
    return (
      <div className={styles.wrapper}>
        <ul className={styles.detail}>
          {
            this.props.config.map(item => (
              <li className={styles.detailItem} key={item.name}>
                <span className={styles.title}>{item.text}</span>
                <span>{convertObjToStr(record[item.name], item.shape)}</span>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Detail;
