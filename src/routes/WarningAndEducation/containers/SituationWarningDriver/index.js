import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';

import columns from './columns';
import SituationWarning from '../../components/SituationWarning';

class SituationWarningDriver extends PureComponent {
  state = {};

  static propTypes = {

  };

  render() {
    return (
      <SituationWarning
        dispatchUrl='drivingLicenseInfo'
        dispatch={this.props.dispatch}
        columns={columns}
      />
    );
  }
}

export default connect(({ SituationWarningModel }) => ({ SituationWarningModel }))(SituationWarningDriver);
