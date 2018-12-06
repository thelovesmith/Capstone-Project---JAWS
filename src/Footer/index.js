import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Segment, Container, Grid, List } from 'semantic-ui-react'
import Subscribe from '../Subscribe/index'
import db from '../Firebase/firebase'

const font = { fontFamily: 'Permanent Marker', fontSize: '20px', color: '#D679D5', textShadow: '0px 1px 3px #211700', letterSpacing: '2px' }

class Footer extends Component {
  constructor() {
    super();
    this.state = {

      fullName: '',
      email: '',

      showSubscribeModal: false
    }
  }
  openModal = () =>{
    this.setState({
      showSubscribeModal: true
    })
  }
  closeModal = () => {
    console.log('modal closed')
    this.setState({
      showSubscribeModal: false
    })
  }
  handleNewFriend = (e) => {
    this.setState({

      [e.currentTarget.name]: e.currentTarget.value

    })
  }
  addFriend = (e) => {
    e.preventDefault()
    console.log('this is where add friends will be ')
    console.log(this.state)

    db.collection('Friends').add({
      fullName: this.state.fullName,
      email: this.state.email
    })
    this.setState({
      fullName: '',
      email: '',
      showSubscribeModal: false
    })
  }
  render(){
    return(
      <Segment inverted vertical style={{ padding: '1em .5em .5em .5em' }}>
        <Container>
          <Grid divided inverted stackable textAlign='center'>
            <Grid.Row >
              <Grid.Column width={3}>
                
                <List link inverted>
                  <Button>
                    <Link style={font} to='/aboutus'> About Us
                    </Link>
                  </Button>
                                  
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                
                
                  <Button>

                    <a style={font} href='http://www.averydante.com/'> Site By</a>
                  </Button>
                                  
               
              </Grid.Column>
              
              <Grid.Column width={3}>
                <Button>

                  <a style={font} href='http://rightdirectionpublishing.com/'> Publishing </a>
                </Button>
                
              </Grid.Column>
              <Grid.Column width={3}>

                <Button style={font} onClick={this.openModal}>
                  Subscribe
                </Button>
                <Subscribe open={this.state.showSubscribeModal} addFriend={this.addFriend} handleNewFriend={this.handleNewFriend} fullName={this.state.fullName} email={this.state.email} closeModal={this.closeModal} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment> 
    )
  }
}
export default Footer;