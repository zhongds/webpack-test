import React from 'react';
import styles from 'components/table/Frame/Frame.less';
import { Link } from 'dva/router';

export default [
  // {
  //   title: '序号',
  //   dataIndex: 'index',
  //   render: (text, record, index) => index + 1,
  //   fixed: 'left',
  //   width: 60,
  // },
  {
    title: '车牌',
    dataIndex: 'licensePlateNumber',
    fixed: 'left',
    width: 92,
  },
  {
    title: '在线状态',
    dataIndex: 'motorVehicleStatus',
  },
  {
    title: '车辆类型',
    dataIndex: 'vehicleType',
    // dictType: 'VEHICLE_MAIN_TYPE',
  },
  {
    title: '运营类型',
    dataIndex: 'function',
    // dictType: 'VEHICLE_USE_NATURE',
  },
  {
    title: '车辆状态',
    dataIndex: 'todo2',
    // dictType: 'VEHICLE_STATUS',
    render: () => '正常运营',
  },
  {
    title: '预警',
    dataIndex: 'mockNumber1',
    // dictType: 'VEHICLE_STATUS',
  },
  {
    title: '违法',
    dataIndex: 'mockNumber2',
    // dictType: 'VEHICLE_STATUS',
  },
  {
    title: '事故',
    dataIndex: 'mockNumber3',
    // dictType: 'VEHICLE_STATUS',
  },
  {
    title: '下次年审日期',
    dataIndex: 'mockDate1',
  },
  {
    title: '相片',
    dataIndex: 'todo',
    render: () => (<div className={styles.link}>查看</div>),
  },
  {
    title: '更多',
    dataIndex: 'operation',
    render: () => (<div className={styles.link}>操作</div>),
  },
];

