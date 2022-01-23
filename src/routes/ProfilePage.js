import React from 'react';
import { Button, Container, Form, FormControl, FormLabel } from 'react-bootstrap';
import Navigation from '../components/Navigation';

const ProfilePage = () => {
  return <div>
    <Navigation />
    <h2 className='p-3'>Create a new profile.</h2>
    <Container>
      <Form className='col-xs-3'>
        <Form.Group className='mb-3' controlId='name'>
          <Form.Label>Name:</Form.Label>
          <Form.Control type='text' placeholder='Enter name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='name'>
          <Form.Label>Occupation:</Form.Label>
          <Form.Control type='text' placeholder='Enter occupation' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='name'>
          <Form.Label>Interests:</Form.Label>
          <Form.Control type='text' placeholder='Enter interests' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='name'>
          <Form.Label>About me:</Form.Label>
          <Form.Control type='text' placeholder='Enter a message' />
        </Form.Group>
        <h6>Gender:</h6>
        <div className='form-group'>
          <input className='form-check-input' type='checkbox' id='male' />
          <label className='form-check-label' for='male'>Male</label>
        </div>
        <div className='form-group'>
          <input className='form-check-input' type='checkbox' id='female' />
          <label className='form-check-label' for='female'>Female</label>
        </div>
        <div className='form-group'>
          <input className='form-check-input' type='checkbox' id='non-binary' />
          <label className='form-check-label' for='non-binary'>Non Binary</label>
        </div>

        <Button className='mt-3' variant='primary'>Create Profile</Button>
      </Form>
    </Container>
  </div>;
};

export default ProfilePage;
