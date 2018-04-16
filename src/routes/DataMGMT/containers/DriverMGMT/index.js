import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';

import columns from './columns';
import MGMT from '../../components/MGMT';

class DriverMGMT extends PureComponent {
  state = {};

  static propTypes = {

  };

  render() {
    return (
      <MGMT
        dispatchUrl='drivingLicenseInfo'
        dispatch={this.props.dispatch}
        columns={columns}
      />
    );
  }
}

export default connect(({ DataMgmtModel }) => ({ DataMgmtModel }))(DriverMGMT);
