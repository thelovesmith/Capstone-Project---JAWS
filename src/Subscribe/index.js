import React from 'react';
import { Modal, Form, Button, Label, Header, Divider } from 'semantic-ui-react';


const Subscribe = (props) => {
  return(
    <Modal open={props.open} style={{border: '2px outset green', boxShadow: '1px 2px 10px grey'}}>
      <Header  textAlign='center'>Subscribe to our mailing list and become a friend of JAWS!</Header>
      <Modal.Content>
        <Form onSubmit={props.addFriend}>

          <Label>Full Name</Label>
          <Divider/>
          <Form.Input icon='users' iconPosition='left' type='text' name='fullName' value={props.fullName} onChange={props.handleNewFriend} placeholder='What is your name?' />

          <Label>Email</Label>
          <Divider/>
          <Form.Input icon='mail' iconPosition='left' type='text' name='email' value={props.email} onChange={props.handleNewFriend} placeholder='What is your email?'/>

          <Modal.Actions>
            <Button animated='fade' primary positive type='submit'>
              <Button.Content visible>Subscribe</Button.Content>
              <Button.Content hidden>Squad Up!</Button.Content>
            </Button>
            <Button animated='fade' negative onClick={props.closeModal} > 
              <Button.Content visible>No Thanks</Button.Content>
              <Button.Content hidden>Maybe Later!</Button.Content>
            </Button>
          </Modal.Actions>

        </Form>
      </Modal.Content>
    </Modal>
  )

}
export default Subscribe;