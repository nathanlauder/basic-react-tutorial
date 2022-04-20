import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

const ButtonHook = () => {
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <div>Clicked count: {count}</div>
      <button onClick={() => setCount(count+1)}>
        Click me!
      </button>
    </Wrapper>
  );
};

export default ButtonHook;