import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Image, Container } from 'semantic-ui-react'

const jaws = 'https://res.cloudinary.com/averydante/image/upload/v1543898127/Jaws/JAWS.png';
const jawsTeam = 'https://res.cloudinary.com/averydante/image/upload/v1543897945/Jaws/JAWS_TEAM_IMAGE.jpg'
class About extends Component {

  render(){
    return(
      <Grid container divided='vertically' stackable>
        <Grid.Row columns={1}>
          <Grid.Column style={{margin: '10px'}}>
            <Container style={{padding: '10px'}}>
              <Image size='large' centered src={jaws}/>
            </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width={8}>
            <Image src={jawsTeam}/>
          </Grid.Column>
          <Grid.Column width={8} textAlign='center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus mauris, faucibus eu blandit in, malesuada sit amet ligula. In pulvinar posuere quam id rutrum. Nullam non semper ipsum. Nam vitae cursus ligula. Ut facilisis ligula mattis porttitor ullamcorper. Quisque sit amet fringilla eros, id condimentum diam. Donec ullamcorper at eros sit amet lobortis. Quisque ullamcorper lectus dapibus, tincidunt felis quis, elementum nibh. Duis nulla erat, scelerisque eget lectus id, dictum maximus dui.
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default withRouter(About);