import React from 'react';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import Profile from '../components/Profile';

const SearchPage = () => {
    return <div>
        <Navigation />
        <h1 className='text-center p-3'>Choose someone to connect to!</h1>
        <Container className='border p-3'>
            <h4>Specify people you want to connect with:</h4>
            <Form>
                <Row>
                    <Col>
                        <div className='form-group'>
                            <label for='topic'>Topic/Field:</label>
                            <input className='form-control col-xs-2' type='text' id='topic' placeholder='Ex. Computer science' />
                        </div>
                    </Col>
                    <Col>
                        <h6>Current level of study:</h6>
                        <div className='form-group'>
                            <input className='form-check-input' type='checkbox' id='highschool' />
                            <label className='form-check-label' for='highschool'>Highschool Student</label>
                        </div>
                        <div className='form-group'>
                            <input className='form-check-input' type='checkbox' id='university' />
                            <label className='form-check-label' for='university'>University Student</label>
                        </div>
                        <div className='form-group'>
                            <input className='form-check-input' type='checkbox' id='professional' />
                            <label className='form-check-label' for='professional'>Industry Professional</label>
                        </div>
                    </Col>
                </Row>
                <div className='text-center p-3'>
                    <Button variant='dark'>Search</Button>
                </div>
            </Form>
        </Container>
        <Container className='p-4 flex'>
            <Row>
                <Col>


                    <Profile
                        name='Peter Parker'
                        occupation='Highschool Student'
                        interest='Computer Science'
                        body="I'm currently looking to make a career in the tech field!" />
                </Col>
                <Col>
                    <Profile
                        name='Tony Stark'
                        occupation='CEO @ Stark Industries'
                        interest='Computer Science'
                        body='Hit me up if you want a job.' />
                </Col>
                <Col>
                    <Profile
                    name='Emily Carr'
                    occupation='University Student'
                    interest='Art'
                    body='Currently a student at UBC. Feel free to connect if you have
                    any questions about UBC!'
                    />
                </Col>
                <Col>
                <Profile 
                name='Justin Trudeau'
                occupation='Prime Minister'
                interest='Politics'
                body='O Canada.' />
                </Col>
            </Row>
        </Container>

    </div>;
};

export default SearchPage;
