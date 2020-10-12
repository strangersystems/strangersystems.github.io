import React from 'react'
import styled from 'styled-components'

export default class Footer extends React.Component {
  render() {
    return (
      <StyledFooter>
        <Logo>
          Stranger Systems
        </Logo>
        <Icons>
          <a href='#'>Linkedin</a>
          <a href='#'>Twitter</a>
          <a href='#'>Github</a>
        </Icons>
        <Legal>
          Copyright Stranger Systems © 2020
        </Legal>
      </StyledFooter>
    );
  }
}

const StyledFooter = styled.footer`
  max-width: calc(1080px - 3em);
  width: 100%;
  padding: 1.5em;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #EBF1F8;
  
  > div {
    margin-right: 2em;
  } 
`;

const Logo = styled.div`
  padding: 1em;
`;

const Icons = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
  padding; 1em;
  font-size: 90%;
  margin-top: 0.5em;

  > a {
    color: #EBF1F8;
    text-decoration: none;
  }
`;

const Legal = styled.div`
  font-size: 85%;
  padding: 1em;
  margin-top: 0.5em;
`;