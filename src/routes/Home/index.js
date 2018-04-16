import React, { PureComponent } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import Footer from '../Layout/Footer';
import styles from './index.scss';
import { ACCESS_TOKEN } from 'config/constants';
import UserHome from './component/UserHome';
import GuestHome from './component/GuestHome';

class Home extends PureComponent {
  state = {

  }
  componentDidMount() {
    console.log(this.props.dispatch);
    console.log(this.props.history);
  }
  render() {
    console.log(ACCESS_TOKEN)
    return (
      <div className={styles.root}>
        <div className={styles.banner} />
        <div className={styles.content}>
          {
            sessionStorage.getItem(ACCESS_TOKEN) ? <UserHome /> : <GuestHome />
          }
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = ({ HomeModel }) => ({
  isLogin: HomeModel.isLogin,
});

export default connect(mapStateToProps)(Home);
