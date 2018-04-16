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
    title: '姓名',
    dataIndex: 'name',
    fixed: 'left',
    width: 92,
  },
  {
    title: '在线状态',
    dataIndex: 'motorVehicleStatus',
  },
  {
    title: '驾驶证号',
    dataIndex: 'drivingLicenseNumber',
    // dictType: 'VEHICLE_MAIN_TYPE',
  },
  {
    title: '联系方式',
    dataIndex: 'tel',
    // dictType: 'VEHICLE_USE_NATURE',
  },
  {
    title: '个人征信指数',
    dataIndex: 'personIndex',
    // dictType: 'VEHICLE_STATUS',
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
    title: '学习签收率',
    dataIndex: 'percentage1',
  },
  {
    title: '预警签收率',
    dataIndex: 'percentage2',
  },
  {
    title: '更多',
    dataIndex: 'operation',
    render: () => (<div className={styles.link}>操作</div>),
  },
];

