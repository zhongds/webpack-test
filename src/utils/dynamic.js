import React from 'react'
import Loadable from 'react-loadable'

import Loading from 'common/LoadingComponent' 

export default function dynamic(loader) {
  return Loadable({
    loader,
    loading: Loading,
  });
}
