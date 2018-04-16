import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const HorizontalList = (props) => {
  const children = Array.isArray(props.children) ? props.children : [props.children];
  const length = children.length;
  return (
    <div className={`${styles.wrapper} ${props.className}`} style={props.style}>
      {
        Children.map(children, (child, i) => (
          <div key={i} className={styles.item} style={{ width: `${100 / length}%` }}>
            <div className={styles.itemContent}>
              {child}
            </div>
          </div>
        ))
      }
    </div>
  );
};


HorizontalList.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
};

HorizontalList.defaultProps = {
  children: [],
  className: '',
  style: null,
};

export default HorizontalList;
