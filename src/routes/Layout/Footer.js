import React from 'react';
import styles from './Footer.scss';

function Footer() {
  return (
    <div className={styles.root}>
      <div className={styles.menu}>
        <ul>
          <li>English</li>
          <li>繁体版</li>
          <li>领导邮箱</li>
          <li>网站导航</li>
        </ul>
      </div>
      <div className={styles.logo}>
        <ul>
          <li />
          <li />
        </ul>
      </div>
      <div className={styles.info}>
        <ul>
          <li>
            ©版权所有:广东省公安厅交通管理局
          </li>
          <li>
            本站建议使用Chrome或IE11以上浏览器
          </li>
          <li>
            粤ICP备12345678号
          </li>
          <li>
            网站标识码：0000000000
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
