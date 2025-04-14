import React from 'react';
import { node } from 'prop-types';

const PlaceholderSize = (props) => {
  const { ...otherProps } = props;

  return (
    <div
      className="placeholder min-h-25 flex h-full items-center justify-center bg-gray-100 p-6 text-base uppercase text-black"
      {...otherProps}
    >
      {props.children}
    </div>
  );
};

PlaceholderSize.propTypes = { children: node };
export default PlaceholderSize;
