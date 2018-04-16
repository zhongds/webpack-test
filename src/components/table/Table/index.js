import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Table, Tooltip } from 'antd';
import styles from './style.less';

class CustomTable extends PureComponent {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    pagination: PropTypes.bool,
    domRef: PropTypes.func,
    type: PropTypes.string,
    filterDropdowns: PropTypes.object,
  }

  // state = {
  //   currentFilterDropdown: '',
  // }

  setFilterDropdowns = (columns, filterDropdowns) => {
    const newColumns = [];
    columns.forEach((col) => {
      if (filterDropdowns[col.dataIndex]) {
        newColumns.push({
          ...col,
          title: <div>{col.title}{filterDropdowns[col.dataIndex]}</div>,
          // filterDropdown: (
          //   <div>
          //     {filterDropdowns[col.dataIndex]}
          //   </div>
          // ),
          // filterDropdownVisible: this.state.currentFilterDropdown === col.dataIndex,
          // onFilterDropdownVisibleChange: (visible) => {
          //   if (visible) {
          //     this.setState({ currentFilterDropdown: col.dataIndex });
          //   } else {
          //     this.setState({ currentFilterDropdown: '' });
          //   }
          // },
        });
      } else {
        newColumns.push(col);
      }
    });
    return newColumns;
  }

  render() {
    const columns = this.props.columns.map(item => (
      // 仅仅在设置了列的 width 的情况下添加溢出时的省略号和tooltip
      item.width
      ? {
        ...item,
        render: (...rest) => (
          <Cell column={item} rest={rest} />
        ),
      }
      : item
    ));
    return (
      <div
        className={`${styles.wrapper} ${this.props.type === 'special' ? null : styles.normal}`}
        ref={this.props.domRef}
      >
        <Table
          size='small'
          rowKey='id'
          // 添加默认的scroll属性， 水平溢出时产生滚动条
          scroll={{ x: 200 }}
          {...this.props}
          // pagination={<Pagination />}
          columns={this.props.filterDropdowns ? this.setFilterDropdowns(columns, this.props.filterDropdowns) : columns}
          pagination={this.props.pagination || false}
          rowClassName={(record, index) => (index % 2 === 0 ? styles.odd : styles.even)}
        />
      </div>
    );
  }
}
// 添加溢出时的省略号和tooltip
/* eslint-disable react/no-multi-comp */
class Cell extends PureComponent {
  static propTypes = {
    column: PropTypes.object.isRequired,
    rest: PropTypes.array.isRequired,
  }
  state = {
    showTooltip: false,
  }
  wrapper;
  onVisibleChange = () => {
    const { offsetWidth, scrollWidth } = this.wrapper;
    console.log(offsetWidth, scrollWidth);
    if (offsetWidth < scrollWidth) {
      this.setState({ showTooltip: !this.state.showTooltip });
    }
  }
  render() {
    const { column, rest } = this.props;
    const text = rest[0];
    const showTooltip = this.state.showTooltip;
    return (
      <div className={`${styles.cellWrapper}`} style={{ width: column.width }} ref={(ref) => { this.wrapper = ref; }}>
        {/* <div className={styles.cellContent}> */}
        <Tooltip placement='topLeft' title={text} onVisibleChange={this.onVisibleChange} visible={showTooltip}>
          {
            column.render ? column.render(...rest) : text
          }
        </Tooltip>
        {/* </div> */}
      </div>
    );
  }
}
/* eslint-enable react/no-multi-comp */

export default CustomTable;
