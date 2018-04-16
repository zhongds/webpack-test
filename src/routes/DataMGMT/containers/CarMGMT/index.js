import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';

import columns from './columns';
import MGMT from '../../components/MGMT';

class CarMGMT extends PureComponent {
  state = {};

  static propTypes = {

  };

  render() {
    return (
      <MGMT
        dispatchUrl='motorVehicleInfo'
        dispatch={this.props.dispatch}
        columns={columns}
      />
    );
  }
}

export default connect(({ DataMgmtModel }) => ({ DataMgmtModel }))(CarMGMT);
