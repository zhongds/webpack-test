import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';

function BigCheckboxGroup(props) {
  const { options, checkedValue, onChange } = props;
  let tempValue = JSON.parse(JSON.stringify(checkedValue));
  function handChange(e) {
    const { checked, value } = e.target;
    if (checked && tempValue.indexOf(value) === -1) {
      tempValue.push(value);
    } else {
      tempValue = tempValue.filter(item => item !== value);
    }
    onChange(tempValue);
  }
  return (
    <div className={styles.big_checkbox_group}>
      <ul>
        {
          options.map(item => <li key={item.value}>
            <input
              id={item.value}
              type='checkbox'
              value={item.value}
              checked={checkedValue.indexOf(item.value) !== -1}
              onChange={handChange}
            />
            <label htmlFor={item.value}>{item.label}
              {
                checkedValue.indexOf(item.value) !== -1 ?
                  <span style={{ background: `${item.color ? item.color : '#00c2e6'}` }}>✔</span> :
                  <span />
              }
            </label>
          </li>,
          )
        }
      </ul>
    </div>
  );
}


BigCheckboxGroup.propTypes = {
  options: PropTypes.array,
  checkedValue: PropTypes.array,
  onChange: PropTypes.func,
};

export default BigCheckboxGroup;
