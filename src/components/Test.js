import React from 'react'

import log from 'utils/lg';

export default class Test extends React.PureComponent {

  render() {
    log('====================test');
    return (
      <div>This is a test page</div>
    )
  }
}
