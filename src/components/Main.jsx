import React from 'react';

const Main = (props) => {
  return (
    <main style={{ backgroundColor: 'e06666' }}>
      {/* Display child components */}
      {props.children}
    </main>
  );
};

export default Main;