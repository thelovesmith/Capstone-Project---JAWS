import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Image, Container, Header } from 'semantic-ui-react';

const headStyle = { fontFamily: 'Bitter', color: '#5977F2', textShadow: '1px 1px 15px #FF77F2', textAlign: 'center', fontSize: '50px', marginTop: '20px' }
const textFont = { fontFamily: 'Questrial', fontSize: '20px', lineHeight: '1.5em'}
const jaws = 'https://res.cloudinary.com/averydante/image/upload/v1543898127/Jaws/JAWS.png';
const jawsTeam = 'https://res.cloudinary.com/averydante/image/upload/v1543897945/Jaws/JAWS_TEAM_IMAGE.jpg';
class About extends Component {

  render(){
    return(
      <Grid container divided='vertically' stackable style={{padding: '100px 0px 50px 0px'}}>
        <Grid.Row columns={1}>
          <Grid.Column style={{margin: '10px'}}>
            <Container style={{padding: '10px'}}>
              <Image size='large' centered src={jaws}/>
            </Container>
            <Header style={headStyle}  > Jack All Of Waves</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width={8}>
            <Image src={jawsTeam}/>
          </Grid.Column>
          <Grid.Column width={8} textAlign='center' style={textFont}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus mauris, faucibus eu blandit in, malesuada sit amet ligula. In pulvinar posuere quam id rutrum. Nullam non semper ipsum. Nam vitae cursus ligula. Ut facilisis ligula mattis porttitor ullamcorper. Quisque sit amet fringilla eros, id condimentum diam. Donec ullamcorper at eros sit amet lobortis. Quisque ullamcorper lectus dapibus, tincidunt felis quis, elementum nibh. Duis nulla erat, scelerisque eget lectus id, dictum maximus dui.
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default withRouter(About);