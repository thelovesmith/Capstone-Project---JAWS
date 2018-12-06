import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  // Button,
  Container,
  // Divider,
  // Grid,
  Icon,
  // Image,
  // List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

class DesktopHeader extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  render(){
    const { children } = this.props
    const { fixed } = this.state
    return (
      <div>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            {/* <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 700, padding: '1em 0em' }}
              vertical
            > */}
              <Menu
                fixed={fixed ? 'top' : null}
                // inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
              >
                <Container>
                  <Menu.Item>
                  <img alt='Jack Of All Waves' src='https://res.cloudinary.com/averydante/image/upload/c_scale,w_86/v1543898120/Jaws/Shark_Player_Layer_copy.png' />
                  </Menu.Item>
                  <Menu.Item >
                    <Link to='/home'>
                    Home
                    </Link>
                  </Menu.Item>
                  <Menu.Item ><Link to='/aboutus'>About Us</Link></Menu.Item>
                  <Menu.Item ><Link to='/artists'>Artists</Link></Menu.Item>
                  <Menu.Item ><Link to='/videos'>Videos</Link></Menu.Item>
                  <Menu.Item ><Link to='/events'>Events</Link></Menu.Item>
                  <Menu.Item ><Link to='/'>Store</Link></Menu.Item>
                  {/* <Menu.Item position='right'>
                    <Button as='a' inverted={!fixed}>
                      Log in
                  </Button>
                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                      Sign Up
                  </Button>
                  </Menu.Item> */}
                </Container>
              </Menu>
              
            {/* </Segment> */}
          </Visibility>

          {children}
        </Responsive>
{/*          
        <Link to='/home'>Home</Link>
        <br/>
        <Link to='/aboutus'>About Us</Link>
        <br/>
        <Link to='/artists'>Artists</Link>
        <br/>
        <Link to='/videos'>Videos</Link>
        <br/>
        <Link to='/events'>Events</Link>
        <br/>
        <Link to='/'>store</Link> */}
      </div>
    )
  }
}
DesktopHeader.propTypes = {
  children: PropTypes.node,
}

class MobileHeader extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })
  handleToggle = () => this.setState({ sidebarOpened: true })
  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive as={Sidebar.Pushable} maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
         
          <Menu.Item >
            <Link to='/home'>
              Home
                    </Link>
          </Menu.Item>
          <Menu.Item ><Link to='/aboutus'>About Us</Link></Menu.Item>
          <Menu.Item ><Link to='/artists'>Artists</Link></Menu.Item>
          <Menu.Item ><Link to='/videos'>Videos</Link></Menu.Item>
          <Menu.Item ><Link to='/events'>Events</Link></Menu.Item>
          <Menu.Item ><Link to='/'>Store</Link></Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 250, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>                                                      
              </Menu>
            </Container>
            
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}
MobileHeader.propTypes = {
  children: PropTypes.node,
}
const ResponsiveHeader = ({ children }) => (
  <div>
    <DesktopHeader>{children}</DesktopHeader>
    <MobileHeader>{children}</MobileHeader>
  </div>

)
ResponsiveHeader.propTypes = {
  children: PropTypes.node,
}
const Header = () => (
  <ResponsiveHeader/>
)
export default Header;