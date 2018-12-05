import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Image } from 'semantic-ui-react'

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  `

class Landing extends Component {

  render(){
    return(
      <Container>
        <Link to='/home'>
        <Image src='https://res.cloudinary.com/averydante/image/upload/v1543897935/Jaws/JAWS_LOGO_on_WHITE.png' size='huge'/>
        </Link>
      </Container>
    )
  }
}

export default Landing;