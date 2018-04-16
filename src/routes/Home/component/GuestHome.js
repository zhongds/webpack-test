import React, { PureComponent } from 'react';
import { Icon, Carousel, Tabs } from 'antd';
import styles from './GuestHome.scss';
import { Link } from 'dva/router';
import WarningCount from './component/WarningCount';

const TabPane = Tabs.TabPane;
const OPTIONS = [
  {
    icon: 'temporary',
    text: '通行证办理',
    color: 'linear-gradient(to top right,rgba(0,201,255,0.9), rgba(147,254,158,0.9))',
  },
  {
    icon: 'paperwork',
    text: '运输许可证办理',
    color: 'linear-gradient(to top right,rgba(119,186,254,0.9), rgba(212,171,250,0.9))',
  },
  {
    icon: 'path',
    text: '运营线路申请',
    color: 'linear-gradient(to top right,rgba(253,186,141,0.9), rgba(249,117,141,0.9))',
  },
  {
    icon: 'illegal',
    text: '机动车违法查询',
    color: 'linear-gradient(to top right,rgba(179,144,204,0.9), rgba(94,231,223,0.9))',
  },
  {
    icon: 'record',
    text: '驾驶证记分查询',
    color: 'linear-gradient(to top right,rgba(167,237,105,0.9), rgba(255,205,142,0.9))',
  },
];
class GuestHome extends PureComponent {
  state = {
    newsList: [
      {
        text: '2018年春运期间道路交通安全“两公开一体式',
        date: '4-11',
      },
      {
        text: '122来了！我们在这里，只为交通更安全，你我更文明',
        date: '4-11',
      },
      {
        text: '东海岸大道深夜现飙车！交警部门一夜查扣10辆！',
        date: '4-11',
      },
    ],
    columns: [{
      title: '企业名称',
      dataIndex: 'name',
    }, {
      title: '预警数',
      dataIndex: 'count',
    }],
    data: [{
      key: '1',
      name: '深圳市XXX有限公司',
      count: 666,
    }, {
      key: '2',
      name: '深圳市XXX有限公司',
      count: 666,
    }, {
      key: '3',
      name: '深圳市XXX有限公司',
      count: 666,
    }],
  }
  tabsCallback = (key) => {
    console.log(key);
  }
  render() {
    const { newsList, columns, data } = this.state;
    return (
      <div className={styles.root}>
        <div className={styles.left}>
          <ul>
            {
              OPTIONS.map(item => (
                <li style={{ background: `${item.color}` }} key={item.icon}>
                  <Icon type={item.icon} />
                  <div>{item.text}</div>
                </li>
              ))
            }
          </ul>
        </div>
        <div className={styles.center}>
          <div className={styles.carousel}>
            <Carousel autoplay>
              <div><h1>1</h1></div>
              <div><h1>2</h1></div>
              <div><h1>3</h1></div>
            </Carousel>
          </div>
          <div className={styles.news}>
            <div className={styles.header}>
              <Icon type='news' />
              <span>最新发布</span>
            </div>
            <ul>
              {
                newsList.map(item => (
                  <li key={item.text}>
                    <Link
                      href
                      to={{
                        pathname: 'announcement',
                      }}
                    >
                      <Icon type='point' />
                      <span>{item.text}</span>
                      <span className={styles.date}>[{item.date}]</span>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className={styles.right}>
          <Tabs defaultActiveKey='1' onChange={this.tabsCallback}>
            <TabPane tab='企业' key='1'>
              <WarningCount columns={columns} title='企业' dataSource={data} />
            </TabPane>
            <TabPane tab='驾驶员' key='2'>
              <WarningCount columns={columns} title='企业' dataSource={data} />
            </TabPane>
            <TabPane tab='车辆' key='3'>
              <WarningCount columns={columns} title='企业' dataSource={data} />
            </TabPane>
          </Tabs>
        </div>
      </div >
    );
  }
}

export default GuestHome;
