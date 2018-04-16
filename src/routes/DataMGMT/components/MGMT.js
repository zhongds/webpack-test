import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Pagination, Modal, message, Select } from 'antd';
import { Wrapper, Top, Middle, Bottom } from 'components/table/Frame';
import Table from 'components/table/Table';

const Option = Select.Option;

export default class MGMT extends PureComponent {
  state = {
    pageOffset: 0,
    pageSize: 0,
    totalSizes: 0,
    initSuccess: false,
  }
  static propTypes = {

  }

  componentDidMount = () => {
    if (!this.props.dispatch) return;
    this.props.dispatch({
      type: 'DataMgmtModel/init',
      payload: {
        dispatchUrl: this.props.dispatchUrl,
        requestPayload: {
          pageOffset: 0,
          pageSize: 8,
        },
      },
    }).then((result) => {
      const { pageInfo } = result;
      this.setState({
        converted: pageInfo.content,
        tableColumns: this.props.columns,
        pageOffset: pageInfo.pageOffset,
        pageSize: pageInfo.pageSize,
        totalSizes: pageInfo.totalSizes,
        initSuccess: true,
      });
    });
  }

  getByPage(payload) {
    // console.log(payload)
    this.props.dispatch({
      type: 'DataMgmtModel/findByPage',
      payload: {
        dispatchUrl: this.props.dispatchUrl,
        requestPayload: {
          pageOffset: 0,
          pageSize: 8,
          ...payload,
        },
      },
    }).then((result) => {
      const pageInfo = result;
      this.setState({
        converted: pageInfo.content,
        pageOffset: pageInfo.pageOffset,
        pageSize: pageInfo.pageSize,
        totalSizes: pageInfo.totalSizes,
      });
    });
  }

  render() {
    if (!this.state.initSuccess) {
      return null;
    }
    return (
      <Wrapper>
        <Top>
          <Select
            defaultValue='0'
          >
            <Option value='0'>在线状态（全部）</Option>
            <Option value='1'>在线</Option>
            <Option value='2'>离线</Option>
          </Select>
          {/* <SearchWithAutocomplete
            // value={this.state.filters.name}
            fetchOption={value => this.getOptionsByPage({ ...this.state.filters, name: value })}
            valueKey='id'
            textKey='name'
            onChange={(value) => { this.setState({ filters: { ...this.state.filters, name: value } }); }}
            onSearch={(value) => {
              this.setState({ filters: { ...this.state.filters, name: value } }, () => {
                this.getByPage({ pageOffset: 0 });
              });
            }}
            placeholder='输入企业名称进行查询'
            width={260}
          /> */}
          <Button type='primary'>历史累计</Button>
          <Button type='primary'>当月统计</Button>
        </Top>
        <Middle>
          <Table
            dataSource={this.state.converted}
            columns={this.state.tableColumns}
            rowKey='id'
            pagination={false}
          />
        </Middle>
        <Bottom>
          <Pagination
            showQuickJumper
            onChange={(pageOffset) => {
              this.getByPage({ pageOffset: pageOffset - 1 });
            }}
            pageSize={8}
            current={this.state.pageOffset + 1}
            total={this.state.totalSizes}
          />
        </Bottom>
      </Wrapper>
    );
  }
}
