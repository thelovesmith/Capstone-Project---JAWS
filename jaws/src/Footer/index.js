import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import Subscribe from '../Subscribe/index'
import db from '../Firebase/firebase'

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
      <div>
        <Button>
          <Link to='/aboutus'> About Us
          </Link>
        </Button>
        <Button>
        <a href='http://www.averydante.com/'> Site By</a>
        </Button>
        <Button onClick={this.openModal}>
          Subscribe
        </Button>
        <Subscribe open={this.state.showSubscribeModal} addFriend={this.addFriend} handleNewFriend={this.handleNewFriend} fullName={this.state.fullName} email={this.state.email} closeModal={this.closeModal} />
        <Button>
          <a href='http://rightdirectionpublishing.com/'> Publishing </a>
        </Button>
      </div>
    )
  }
}
export default Footer;