import React, { Children } from 'react';
import { Link } from 'dva/router';
import styles from './styles.less';

export default props => (
  <div className={styles.wrapper}>
    <div className={styles.colorBlock} />
    <div className={styles.title}>
      {
        Children.map(props.children, c => <div className={styles.titleItem}>{c}</div>)
      }
    </div>
    {
      props.moreTo && (

        <Link className={styles.more} {...props}>
          {'更多 >'}
        </Link>
      )
    }
    {
      props.onMoreClick && (

        <div className={styles.more} href='' onClick={(e) => { e.preventDefault(); props.onMoreClick(); }}>
          {'更多 >'}
        </div>
      )
    }
  </div>
);

