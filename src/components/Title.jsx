import React from 'react';
import styled from 'styled-components';

const TitleText = styled.h1`
  color: red;
  text-align: center;
`;

// destructure props object to explicitly define incoming props
// could also just accept the props parameter with (props)
const Title = ({ pageTitle }) => {
  return (
    <TitleText>
      {pageTitle}
    </TitleText>
  );
};

export default Title;