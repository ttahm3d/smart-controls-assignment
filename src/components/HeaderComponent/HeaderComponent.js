import React from "react";
import styled from "styled-components";

const HeaderComponent = ({ title }) => {
  return (
    <HeaderWrapper>
      <h1>{title}</h1>
    </HeaderWrapper>
  );
};

export default HeaderComponent;

const HeaderWrapper = styled.header`
  background-color: #1a1d24;
  padding: 1rem 0;

  h1 {
    font-size: 3.2rem;
    margin: 0 auto;
    width: 90vw;
    max-width: 1024px;
    color: hsla(209, 100%, 55%, 1);
  }
`;
