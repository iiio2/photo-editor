import { Fragment } from 'react';

const Slider = ({ min, max, value, handleChange }) => {
  return (
    <Fragment>
      <input
        type='range'
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className='form-range'
      />
    </Fragment>
  );
};

export default Slider;
