import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { TopBox } from 'components';
import { HorizontalList } from 'components/layout';
import styles from './styles.scss';

export default class EducationOnline extends PureComponent {
  state = {};

  static propTypes = {

  };

  render() {
    return (
      <div>
        <TopBox onMoreClick={() => {}}><Icon type='label' />课程展播</TopBox>
        <HorizontalList>
          <div className={styles.textPic}>1</div>
          <div className={styles.textPic}>2</div>
          <div className={styles.textPic}>3</div>
          <div className={styles.textPic}>4</div>
        </HorizontalList>
        <TopBox onMoreClick={() => {}}><Icon type='lesson' />专题</TopBox>
        <HorizontalList>
          <div className={styles.textPic}>1</div>
          <div className={styles.textPic}>2</div>
          <div className={styles.textPic}>3</div>
          <div className={styles.textPic}>4</div>
        </HorizontalList>
      </div>
    );
  }
}
