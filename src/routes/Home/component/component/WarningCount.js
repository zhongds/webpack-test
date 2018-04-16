import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import styles from './WarningCount.scss';
import { SmoothTable } from 'components';

function WarningCount(props) {
  const { title, columns, dataSource } = props;
  return (
    <div>
      <div className={styles.header}>
        <Icon type='exclamation-circle' />
        <span>近一个月内问题突出的{title}名单</span>
      </div>
      <SmoothTable columns={columns} dataSource={dataSource} />
    </div>
  );
}

WarningCount.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  dataSource: PropTypes.array.isRequired,
};

export default WarningCount;
