import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const BackArrow = () => {

  const iconStyle = {
    transform: 'scale(3)',
    color: 'blue',
    marginLeft: '20px',
    marginTop: '15px',
  };

  return (
    <Link to={'/'}>
      <BsArrowLeft style={iconStyle} />
    </Link>
  );
}

export default BackArrow;
