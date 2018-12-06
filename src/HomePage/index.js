import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import db from '../Firebase/firebase'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  // Icon,
  Image,
  List,
  // Menu,
  // Responsive,
  Segment,
  // Sidebar,
  // Visibility,
} from 'semantic-ui-react'

//Import Components
import Subscribe from '../Subscribe/index'
class Home extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      fullName: '',
      email: '',
      showSubscribeModal: false,
      fixed: null
    }
  }
  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  componentDidMount(){
    console.log('=========================================')
    console.log('being Called')
    console.log('=========================================')
    this.setState({
      showSubscribeModal: true
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
  closeModal = () => {
    console.log('modal closed')
    this.setState({
      showSubscribeModal: false
    })
  }
  render(){

    // const { fixed } = this.state
    return(
      <div>
        <Segment style={{ padding: '8em 0em', backgroundImage: 'url(https://res.cloudinary.com/averydante/image/upload/v1543898178/Jaws/Nebula_Aurigae_image.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em', color:'orange' }}>
                  Jack Of All Waves
            </Header>
                <p style={{ fontSize: '1.33em' }}>
                  We can give your company superpowers to do things that they never thought possible.
                  Let us delight your customers and empower your needs... through pure data analytics.
            </p>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  We Make Bananas That Can Dance
            </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                  bioengineered.
            </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image bordered rounded size='large' src='https://res.cloudinary.com/averydante/image/upload/v1543898151/Jaws/JAWS_SHARK_layer.png' />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge'>Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Interstellar Wave Love
            </Header>
                <p style={{ fontSize: '1.33em' }}>Riding harmonic waves into the cosmic soul</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Lorem import {  } from "module";
            </Header>
                <p style={{ fontSize: '1.33em' }}>
                  <Image avatar src='/images/avatar/large/nan.jpg' />
                  "Every moment is a <b>test</b> or <b>celebration</b>"
            </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Check Out Our Released Singles 
        </Header>
            <p style={{ fontSize: '1.33em' }}>
              Instead of focusing on content creation and hard work, we have learned how to master the
              art of doing nothing by providing massive amounts of whitespace and generic content that
              can seem massive, monolithic and worth your attention.
        </p>
            <Button as='a' size='large'>
              Read More
        </Button>
            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href='#'>Case Studies</a>
            </Divider>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Did We Tell You About Our Bananas?
        </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
              it's really true. It took years of gene splicing and combinatory DNA research, but our
              bananas can really dance.
        </p>
            <Button as='a' size='large'>
              I'm Still Quite Interested
        </Button>
          </Container>
        </Segment>
        
        <Subscribe open={this.state.showSubscribeModal} addFriend={this.addFriend} handleNewFriend={this.handleNewFriend} fullName={this.state.fullName} email={this.state.email} closeModal={this.closeModal}/>
      </div>
    )
  }
}
export default withRouter(Home);