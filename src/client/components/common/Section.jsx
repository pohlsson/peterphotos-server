import React from 'react';
import styled from 'styled-components';
import padding from 'styles/padding';
import border from 'styles/border';
import depth from 'styles/depth';

const StyledSection = styled.section`
    ${padding}
    ${border}
    ${depth}
`;

export const Section = ({children, ...other}) => (
  <StyledSection {...other}>
    {children}
  </StyledSection>
);
