import React, { PureComponent, Children } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Checkbox, Icon, Button, Input } from 'antd';
import styles from './styles.less';

export default class FilterDropdown extends PureComponent {
  static Option = props => (
    <li className={props.className}>
      <span>{props.children}</span>
      {/* 选项遮盖层 */}
      <div className={styles.checkBox} onClick={props.onClick} />
      <Checkbox
        checked={props.checked}
        className={styles.checkBoxIcon}
      />
    </li>
  );

  static propTypes = {
    width: PropTypes.number,
    defaultValue: PropTypes.array,
    checkedValues: PropTypes.array,
    children: PropTypes.array,
    onOk: PropTypes.func,
    // switchMode: PropTypes.bool,
    // onSwitchMode: PropTypes.func,
  }
  static defaultProps = {
    width: 200,
    defaultValue: null,
    checkedValues: null,
    children: [],
    onOk: () => {},
  }

  state={
    visible: false,
    left: 0,
    top: 0,
    // 选中状态 （实际选中）若父组件传入checkedValues属性，则由其取代，checkedItems将不被使用
    checkedItems: [],
    // 选中状态 （视图）
    selecting: [],
    // selectValue: 'all',
    shouldSearch: false,
    searchInput: '',

    // 切换单选多选
    // isMulti: true,
  }

  isOnOk = false;
  wrapperDivRef;
  iconWrapperRef;
  ulScrollCollection;
  ulScrollRef;
  lastScrollTop
  // 切换单选多选时的特殊处理， 存储一次onOk的执行
  toTrigger = null;
  isInsideFocus = false;

  componentWillMount = () => {
    if (this.shouldSearch()) {
      this.setState({ shouldSearch: true });
    }
    // if (this.props.switchMode) {
    //   this.setState({ isMulti: false });
    // }
    // 根据defaultValue属性， 更新选中状态 （视图）及 （实际选中）
    if (Array.isArray(this.props.defaultValue)) {
      this.setState({
        selecting: this.props.defaultValue,
        checkedItems: this.props.defaultValue,
      });
    }
    // 根据checkedValues属性， 更新选中状态 （视图）
    if (Array.isArray(this.props.checkedValues)) {
      this.setState({ selecting: this.props.checkedValues });
    }
  }
  componentWillReceiveProps = (nextProps) => {
    // 根据checkedValues属性， 更新选中状态 （视图）
    if (Array.isArray(nextProps.checkedValues)) {
      this.setState({ selecting: nextProps.checkedValues });
    }
  }
  shouldSearch = () => {
    if (Array.isArray(this.props.children)) {
      return this.props.children.length > 6;
    }
    return false;
  }
  onCheckBoxClick = (value, e) => {
    const index = this.state.selecting.indexOf(value);
    const next = [...this.state.selecting];
    if (index === -1) {
      next.push(value);
    } else {
      next.splice(index, 1);
    }
    this.setState({
      selecting: next,
      // selectValue: next.length === 0 ? 'all' : 'filter',
    });
  }
  onOk = () => {
    // e.stopPropagation();
    this.saveScrollTop();

    this.toTrigger = null;
    this.isOnOk = true;
    setTimeout(() => { this.isOnOk = false; }, 0);
    // 更新视图选中状态到实际选中状态中
    if (!Array.isArray(this.props.checkedValues)) {
      this.setState({
        checkedItems: [...this.state.selecting],
      });
    }
    this.setState({ visible: false });
    this.props.onOk(this.state.selecting);
  }
  onReset = () => {
    this.setState({
      selecting: [],
      // selectValue: 'all',
    });
  }
  onInsideFocus = (e) => {
    // react 的 blur 和 focus 竟然会冒泡！行为同 onFocusOut 和 onFocusIn
    e.stopPropagation();
    this.isInsideFocus = true;
    // this.wrapperDivRef.focus();
  }
  // onInsideFocus = () => {
  //   console.log('this.insideFocus = true;')
  // }
  // 失去焦点时调用此方法，
  onAreaBlur = (e) => {
    // react 的 blur 和 focus 竟然会冒泡！ 行为同 onFocusOut 和 onFocusIn
    e.stopPropagation();
    // if (this.toTrigger) {
    //   this.toTrigger();
    //   this.toTrigger = null;
    // }
    // if (!this.state.isMulti) return;
    setTimeout(() => {
      if (!this.isInsideFocus && !this.isOnOk) {
        this.isBlur = true;
        this.saveScrollTop();
        // 视图选中状态还原到上一次点击确定时的实际选中状态
        const checkedItems = (Array.isArray(this.props.checkedValues)
          ? this.props.checkedValues : this.state.checkedItems);
        this.setState({
          selecting: [...checkedItems],
          // selectValue: checkedItems.length === 0 ? 'all' : 'filter',
          visible: false,
        }, () => { setTimeout(() => { this.isBlur = false; }, 25); });
      }
      this.isInsideFocus = false;
    }, 0);
  }

  // 单选事件
  onSelect = (value) => {
    // this.setState({ selectValue: value });
    this.toTrigger = null;
    if (value === 'all') {
      this.props.onOk([]);
    } else {
      this.props.onOk([value]);
    }
  }

  // 记录滚动条位置
  saveScrollTop = () => {
    if (this.ulScrollRef) {
      this.lastScrollTop = this.ulScrollRef.scrollTop;
    }
  }

  // 还原滚动条位置
  setScrollTop = () => {
    setTimeout(() => {
      if (this.ulScrollRef) {
        this.ulScrollRef.scrollTop = this.lastScrollTop;
      }
    }, 0);
  }

  onFilterClick = () => {
    if (!this.state.visible && !this.isBlur) {
      this.setScrollTop();
      const { left, top, height } = this.iconWrapperRef.getBoundingClientRect();
      this.setState({
        visible: true,
        left,
        top: (top + height) - 4,
      }, () => {
        this.wrapperDivRef.focus();
        this.isInsideFocus = false;
      });
    }
  }

  isEmpty = () => {
    const checkedItems = Array.isArray(this.props.checkedValues) ? this.props.checkedValues : this.state.checkedItems;
    return checkedItems.length === 0;
  }

  isMatchInput = (input, option) => {
    const str = option.props.children;
    if (typeof str === 'string' && str.trim !== '') {
      return str.match(input) !== null;
    }
    return false;
  }

  render() {
    const children = this.props.children;

    return (
      <div className={styles.wrapper} ref={(ref) => { this.iconWrapperRef = ref; }}>
        {
          this.state.visible
            ? (
              <Icon
                key='disableClick'
                type='filter'
                style={{ color: this.isEmpty() ? null : '#1890ff' }}
              />
            )
            : (
              <Icon
                key='allowClick'
                type='filter'
                style={{ color: this.isEmpty() ? null : '#1890ff' }}
                onClick={this.onFilterClick}
              />
            )
        }
        {
          ReactDOM.createPortal(
            (
              <div
                style={{
                  display: this.state.visible ? 'block' : 'none',
                  left: this.state.left,
                  top: this.state.top,
                }}
                ref={(ref) => { this.wrapperDivRef = ref; }}
                className={styles.dropWrapper}
                tabIndex={-1}
                onClick={(e) => { e.stopPropagation(); }}
                onFocus={this.onInsideFocus}
                onBlur={this.onAreaBlur}
              >
                {
                  this.state.shouldSearch &&
                  <div className={styles.searchArea}>
                    <Input
                      size='small'
                      value={this.state.searchInput}
                      onClick={(e) => { e.stopPropagation(); }}
                      onFocus={this.onInsideFocus}
                      onBlur={this.onAreaBlur}
                      onChange={(e) => { this.setState({ searchInput: e.target.value }); }}
                      placeholder='关键字检索'
                    />
                  </div>
                }
                <ul
                  // onBlur={this.onBlur}
                  // 区别单选多选
                  // onSelect={!this.state.isMulti ? this.onSelect : () => {}}
                  className={`${styles.select} ${this.state.shouldSearch && styles.withScroll}`}
                  // value={this.state.selectValue}
                  style={{ width: this.props.width }}
                  ref={(ref) => { this.ulScrollRef = ref; }}
                  // showSearch={this.state.shouldSearch ? true : null}
                  // placeholder='输入关键字检索'
                  // filterOption={(input, option) => {
                  //   if (option.props.disb) return false;
                  //   if (option.props.always) return true;
                  //   // 区别单选多选
                  //   if (this.state.isMulti) {
                  //     const str = option.props.children.props.children[0].props.children;
                  //     if (typeof str === 'string') {
                  //       return str.match(input) !== null;
                  //     }
                  //     return false;
                  //   }
                  //   return option.props.children.match(input) !== null;
                  // }}
                >
                  {/* Select的选项 */}
                  {
                    // 克隆Option，并给其添加额外的属性
                    Children.map(children, (child) => {
                      if (this.state.shouldSearch && !this.isMatchInput(this.state.searchInput, child)) {
                        return null;
                      }
                      return React.cloneElement(
                        child,
                        {
                          className: styles.option,
                          onClick: (e) => { this.onCheckBoxClick(child.props.value, e); },
                          checked: this.state.selecting.indexOf(child.props.value) !== -1,
                        },
                      );
                    })
                  }
                  {/* Select底部操作栏 */}
                  <li key='bottom' className={styles.buttonOption} always='true'>
                    {/* 遮盖层 */}
                    {/* <div className={styles.checkBox} onClick={(e) => { e.stopPropagation(); }} /> */}
                    {/* 确认按钮 */}
                    <div className={styles.button}>
                      <Button
                        type='normal'
                        size='small'
                        // 阻止触发父元素blur事件和自身focus
                        onMouseDown={(e) => { e.preventDefault(); }}
                        onClick={this.onReset}
                        className={styles.leftButton}
                      >
                        重置
                      </Button>
                      <Button
                        type='primary'
                        size='small'
                        // 阻止触发父元素blur事件和自身focus
                        onMouseDown={(e) => { e.preventDefault(); }}
                        onClick={this.onOk}
                        className={styles.rightButton}
                      >
                        确定
                      </Button>
                    </div>
                    {
                      // this.state.isMulti &&
                      // <div onClick={this.onOk} className={styles.button}>确定</div>
                      // <Button type='primary' size='small' onClick={this.onOk} className={styles.button}>确定</Button>
                    }
                  </li>
                </ul>
              </div>
            ),
            document.body,
          )
        }
      </div>
    );
  }
}
