import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const TittleWithContent = props => (
  <div className={`${styles.wrapper} ${props.className}`}>
    <div className={styles.top} styles={{ height: props.titleHeight }}>
      { Array.isArray(props.children) && props.children[0] }
    </div>
    <div className={styles.bottom} style={{ top: props.titleHeight }}>
      { Array.isArray(props.children) && props.children[1] }
    </div>
  </div>
);

TittleWithContent.propTypes = {
  children: PropTypes.array.isRequired,
  titleHeight: PropTypes.number,
  className: PropTypes.string,
};

TittleWithContent.defaultProps = {
  className: '',
  titleHeight: 50,
};

export default TittleWithContent;

