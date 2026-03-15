import React from 'react';

const Test = () => {
  return React.createElement('div', {
    style: {
      padding: '50px',
      backgroundColor: 'red',
      color: 'white',
      fontSize: '30px',
      textAlign: 'center',
      minHeight: '100vh'
    }
  }, 'IF YOU SEE THIS, REACT IS WORKING!');
};

export default Test;