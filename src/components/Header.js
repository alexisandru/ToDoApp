import React from 'react';
import styled from 'styled-components'

import bulb from './svg/bulb.svg'

const Header = (props) => {

  

  return (
    <Container>
        <Title>ToDo App</Title>
        <Light onClick={() => props.changeTheme()}>
          <Img src={bulb} name="image" alt=""/>
        </Light>
    </Container>
  )
}

export default Header


const Container = styled.div`
  width: 100%;
 

  box-shadow: ${props => props.theme.shadow ? "0 1px 10px 1px #cccccc": "none"};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 50px;

  background-color: ${props => props.theme.header};

  color: ${props => props.theme.color};

  @media screen and (max-width: 600px) {
    padding: 5px 25px;
  }
  
`

const Title = styled.p`
  font-size: 1.5em;  
`

const Light = styled.div`
  padding: 6px;
  
  display: flex;
  align-items: center;
  border-radius: 50%;
  
  &:hover {
    background-color: lavender;
    cursor: pointer;
  }
`

const Img = styled.img`
  width: 1.8em;
  height: 1.8em;
  filter: invert(${props => props.theme.bulb});
  //padding: 5px;

  @media screen and (max-width: 600px) {
    width: 1.5em;
    height: 1.5em;
  }
`