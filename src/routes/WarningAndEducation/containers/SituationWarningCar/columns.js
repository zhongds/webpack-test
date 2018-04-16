import React from 'react';
import styles from 'components/table/Frame/Frame.less';
import { Link } from 'dva/router';

export default [
  {
    title: '排名',
    dataIndex: 'index',
    render: (text, record, index) => index + 1,
    fixed: 'left',
    width: 60,
  },
  {
    title: '车牌',
    dataIndex: 'licensePlateNumber',
    fixed: 'left',
    width: 92,
  },
  {
    title: '车辆类型',
    dataIndex: 'vehicleType',
    // dictType: 'VEHICLE_MAIN_TYPE',
  },
  {
    title: '适用类型',
    dataIndex: 'function',
    // dictType: 'VEHICLE_USE_NATURE',
  },
  {
    title: '预警总数',
    dataIndex: 'mockNumber1',
  },
  {
    title: '违法总数',
    dataIndex: 'mockNumber2',
  },
  {
    title: '事故总数',
    dataIndex: 'mockNumber3',
  },
  {
    title: '预警指数',
    dataIndex: 'mockNumber4',
  },
];

