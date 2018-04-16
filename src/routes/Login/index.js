import React, { PureComponent } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './index.scss';

const FormItem = Form.Item;
class NormalLoginForm extends PureComponent {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof this.props.form);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        sessionStorage.setItem('access_token', '深圳市XXXX股份有限公司');
        this.props.history.push('/');
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.root}>
        <Form onSubmit={this.handleSubmit} className={styles.login}>
          <FormItem>
            <div className={styles.header}>
              <div className={styles.title}>广东省重点车辆管理服务平台</div>
              <div className={styles.adress}>www.gd8vserver.com</div>
            </div>
          </FormItem>
          <FormItem>
            <div className={styles.mark}>单位用户登录</div>
          </FormItem>
          <FormItem className={styles.center}>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入您的账号!' }],
            })(<Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入账号' />)}
          </FormItem>
          <FormItem className={styles.center} >
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入您的密码!' }],
            })(<Input
              autoComplete='new-password'
              prefix={
                <Icon
                  type='lock'
                  style={{ color: 'rgba(0,0,0,.25)' }}
                />
              }
              type='password'
              placeholder='请输入密码'
            />)}
          </FormItem>
          <FormItem className={styles.between}>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>记住密码</Checkbox>)}
            <a href='/#'>忘记密码</a>
          </FormItem>
          <FormItem className={styles.center}>
            <Button type='primary' htmlType='submit' className={styles.btn}>
              登陆
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const Login = Form.create()(NormalLoginForm);

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};
NormalLoginForm.propTypes = {
  history: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const { loading } = state;
  console.log('state', state);
  return ({
    loading,
  });
};

export default connect(mapStateToProps)(Login);
