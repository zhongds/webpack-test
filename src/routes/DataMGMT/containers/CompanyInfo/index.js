import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Detail } from 'components';
import dataConfig from './dataConfig';

export default class CompanyInfo extends PureComponent {
  state = {};

  static propTypes = {

  };

  render() {
    return (
      <Detail record={{}} config={dataConfig} />
    );
  }
}
