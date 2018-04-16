import React from 'react';

import error404Img from 'assets/images/error404.jpg';
import styles from './index.less';

const Error404 = () => (
  <div className={styles.error}>
    <img src={error404Img} alt='错误图片' />
    <span>没权限啦啦啦啦~~~~~~~</span>
  </div>
);

export default Error404;
