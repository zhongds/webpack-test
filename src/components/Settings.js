import React from 'react';
import moment from 'moment';
import _ from 'lodash'
import log from 'utils/lg';

export default function Settings() {
  log('===================settings');
  moment().format('MMMM Do YYYY, h:mm:ss a');
  _.compact([0, 1, false, 2, '', 3]);
  return (
    <div>Settings.....</div>
  )
}