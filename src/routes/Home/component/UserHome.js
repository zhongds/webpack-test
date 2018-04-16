import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import styles from './UserHome.scss';
import { SmoothTable } from 'components';

class UserHome extends PureComponent {
  state = {
    warnList: [
      {
        title: '预警信息',
        color: 'linear-gradient(to right,rgb(255,158,77), rgb(251,104,123))',
        border: 'rgb(251,130,101)',
        content: {
          columns: [{
            title: 'serial',
            dataIndex: 'serial',
            render: (text, record, index) => <span> {index + 1}</span>,
          }, {
            title: 'type',
            dataIndex: 'type',
          }, {
            title: 'number',
            dataIndex: 'number',
          }, {
            title: 'name',
            dataIndex: 'name',
          }],
          data: [{
            key: '1',
            name: '张三',
            number: '粤Axxx',
            type: '超速预警',
          }, {
            key: '2',
            name: '张三',
            number: '粤Axxx',
            type: '超速预警',
          }, {
            key: '3',
            name: '张三',
            number: '粤Axxx',
            type: '超速预警',
          }],
        },
      },
      {
        title: '违法信息',
        color: 'linear-gradient(to right,rgb(137,90,218), rgb(82,187,217))',
        border: 'rgb(113,129,217)',
        content: {
          columns: [{
            title: 'serial',
            dataIndex: 'serial',
            render: (text, record, index) => <span> {index + 1}</span>,
          }, {
            title: 'type',
            dataIndex: 'type',
          }, {
            title: 'name',
            dataIndex: 'name',
          }],
          data: [{
            key: '1',
            name: '张三',
            type: '驾驶证逾期未审验',
          }, {
            key: '2',
            name: '张三',
            type: '驾驶证逾期未审验',
          }, {
            key: '3',
            name: '张三',
            type: '驾驶证逾期未审验',
          }],
        },
      },
      {
        title: '一键报警',
        color: 'linear-gradient(to right,rgb(90,206,133), rgb(238,211,18))',
        border: 'rgb(131,207,99)',
        content: {
          columns: [{
            title: 'serial',
            dataIndex: 'serial',
            render: (text, record, index) => <span> {index + 1}</span>,
          }, {
            title: 'type',
            dataIndex: 'type',
          }, {
            title: 'number',
            dataIndex: 'number',
          }, {
            title: 'name',
            dataIndex: 'name',
          }],
          data: [{
            key: '1',
            name: '张三',
            number: '粤Axxx',
            type: '超速预警',
          }, {
            key: '2',
            name: '张三',
            number: '粤Axxx',
            type: '超速预警',
          }, {
            key: '3',
            name: '张三',
            number: '粤Axxx',
            type: '超速预警',
          }],
        },
      },
      {
        title: '事故信息',
        color: 'linear-gradient(to right,rgb(122,197,193), rgb(42,105,136))',
        border: 'rgb(96,166,174)',
        content: {
          columns: [{
            title: 'serial',
            dataIndex: 'serial',
            render: (text, record, index) => <span> {index + 1}</span>,
          }, {
            title: 'type',
            dataIndex: 'type',
          }, {
            title: 'number',
            dataIndex: 'number',
          }, {
            title: 'name',
            dataIndex: 'name',
          }],
          data: [{
            key: '1',
            name: '张三',
            number: '粤Axxx',
            type: '超速预警',
          }, {
            key: '2',
            name: '张三',
            number: '粤Axxx',
            type: '超速预警',
          }, {
            key: '3',
            name: '张三',
            number: '粤Axxx',
            type: '超速预警',
          }],
        },
      },
    ],
    onlineData: {
      columns: [{
        title: 'type',
        dataIndex: 'type',
      }, {
        title: 'number',
        dataIndex: 'number',
        render: text => (<a href='/#'>{text}</a>),
      }],
      data: [{
        key: '1',
        number: '200/15',
        type: '车辆/当前在线',
      }, {
        key: '2',
        number: '155/56',
        type: '驾驶员/当前在线',
      }, {
        key: '3',
        number: '25',
        type: '未处理预警信息',
      }, {
        key: '4',
        number: '3',
        type: '未查看通知消息',
      }, {
        key: '5',
        number: '6',
        type: '未处理警报消息',
      }],
    },
    menuList: [
      {
        text: '驾驶员信息查询',
        icon: 'driver',
        color: 'linear-gradient(to bottom right,rgb(217,174,227), rgb(162,141,210)',
      },
      {
        text: '驾驶证真伪校验',
        icon: 'verify',
        color: 'linear-gradient(to bottom right,rgb(167,180,233), rgb(124,146,204)',
      },
      {
        text: '车辆位置跟踪',
        icon: 'track',
        color: 'linear-gradient(to bottom right,rgb(94,196,201), rgb(114,177,212)',
      },
      {
        text: '在线学习',
        icon: 'Learning',
        color: 'linear-gradient(to bottom right,rgb(245,158,174), rgb(244,127,169)',
      },
      {
        text: '驾驶员签到记录',
        icon: 'record',
        color: 'linear-gradient(to bottom right,rgb(245,200,161), rgb(244,160,134)',
      },
      {
        text: '站内信箱',
        icon: 'mailbox',
        color: 'linear-gradient(to bottom right,rgb(134,219,177), rgb(81,195,136)',
      },
    ]
  }
  render() {
    const { warnList, onlineData, menuList } = this.state;
    return (
      <div className={styles.root}>
        <div className={styles.top}>
          <div className={styles.left}>
            <ul>
              {
                warnList.map(item => (
                  <li key={item.color} style={{ border: `1px solid ${item.border}` }}>
                    <h4 style={{ background: `${item.color}` }}>{item.title}<Icon type='right' /></h4>
                    <SmoothTable dataSource={item.content.data} columns={item.content.columns} showHeader={false} />
                  </li>
                ))
              }
            </ul>
          </div>
          <div className={styles.right}>
            <SmoothTable dataSource={onlineData.data} columns={onlineData.columns} showHeader={false} />
          </div>
        </div>
        <div className={styles.bottom}>
          <ul>
            {
              menuList.map(item => (
                <li key={item.text} style={{ background: `${item.color}` }}>
                  <Icon type={item.icon} />
                  <span>{item.text}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default UserHome;
