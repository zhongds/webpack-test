import React from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import './index.scss';

function SmoothTable(props) {
  return (
    <Table {...props} pagination={false} size='middle' />
  );
}

SmoothTable.propTypes = {
  columns: PropTypes.array.isRequired,
  dataSource: PropTypes.array.isRequired,
};

export default SmoothTable;
