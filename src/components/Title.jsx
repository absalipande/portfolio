import React from 'react';

function Title({ children, id }) {
  return (
    <h1
      id={id && id}
      className="text-3xl mb-5 font-bold text-black dark:text-white"
    >
      {children}
    </h1>
  );
}

export default Title;
