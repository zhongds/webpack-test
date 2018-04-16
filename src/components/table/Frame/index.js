import React, { Children } from 'react';
import styles from './Frame.less';

// const classNameMap = {
//   Select: 'select',
//   Button: 'button',
//   Search: 'search',
//   Pagination: 'pagination',
// };

export const Wrapper = props => {
  console.log(props.children);
  return (
    <div className={`${styles.wrapper} ${props.className}`}>
      { props.children }
    </div>
  );
};

export const Top = (props) => {
  const children = props.children;
  const num = Children.count(children);
  return (
    <div className={`${styles.top} ${props.className}`}>
      {Children.map(children, (c, i) => {
        let className;
        // if (c.type && c.type.name) className = styles[classNameMap[c.type.name]];
        if (props.withSearch && num !== 0 && i === num - 1) className = styles.last;
        return (
          <div className={className}>
            {c}
          </div>
        );
      })}
    </div>
  );
};

export const Middle = (props) => {
  const children = props.children;
  return (
    <div className={`${styles.middle} ${props.className}`}>
      { children }
    </div>
  );
};

export const Bottom = (props) => {
  const children = props.children;
  const num = Children.count(children);
  return (
    <div className={`${props.static ? styles.bottomStatic : styles.bottom} ${props.className}`}>
      {Children.map(children, (c, i) => {
        let className;
        if (!props.justLeft && num !== 0 && i === num - 1) className = styles.pagination;
        return (
          <div className={className}>
            {c}
          </div>
        );
      })}
    </div>
  );
};
