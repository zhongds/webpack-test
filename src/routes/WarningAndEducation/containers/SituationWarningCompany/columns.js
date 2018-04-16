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
    title: '企业名称',
    dataIndex: 'name',
    fixed: 'left',
    // width: 92,
  },
  {
    title: '企业规模等级',
    dataIndex: 'scopeLevel',
  },
  {
    title: '所属辖区',
    dataIndex: 'division',
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

