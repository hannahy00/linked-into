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
                    <Col className=''>
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
                        gender='Male'
                        occupation='Highschool Student'
                        interest='Computer Science'
                        body="I'm currently looking to make a career in the tech field!" />
                </Col>
                <Col>
                    <Profile
                        name='Tony Stark'
                        gender='Male'
                        occupation='CEO @ Stark Industries'
                        interest='Computer Science'
                        body='Hit me up if you want a job.' />
                </Col>
                <Col>
                    <Profile
                    name='Emily Carr'
                    gender='Female'
                    occupation='University Student'
                    interest='Art'
                    body='Currently a student at UBC. Feel free to connect if you have
                    any questions about UBC!'
                    />
                </Col>
                <Col>
                <Profile 
                name='Justin Trudeau'
                gender='Male'
                occupation='Prime Minister'
                interest='Politics'
                body='O Canada.' />
                </Col>
            </Row>
            <Row>
                <Col>
                <Profile
                    name='Alex Wu'
                    gender='Non Binary'
                    occupation='Game Developer @ Nintendo'
                    interest='Game Development, Computer Science'
                    body="I've been a game developer for 10 years, feel free to connect and ask 
                    me any questions you have about the game industry! :) "
                    />
                </Col>
                <Col>
                <Profile
                    name='Annie Kim'
                    gender='Female'
                    occupation='Software Developer @ Company'
                    interest='Software Development, Computer Science'
                    body='I recently graduated from UBC and have been working for about a year. 
                    If you are having any difficulties in choosing a career path, feel free to message!'
                    />
                </Col>
                <Col>
                <Profile
                    name='Sherry Yoo'
                    gender='Female'
                    occupation='Highschool Student'
                    interest='Game Development, Computer Science'
                    body="I've been interested in game development but I'm not too sure where to start.
                    If you have any guidance or want to work together, please connect with me!"
                    />
                </Col>
                <Col>
                <Profile
                    name='Angie Lee'
                    gender='Female'
                    occupation='University Student'
                    interest='Machine Learning, Computer Science'
                    body="I'm currently a first year at UBC and want to do machine learning in the future!
                    If you work in the industry I would love to connect and hear about your experiences."
                    />
                </Col>
            </Row>
        </Container>

    </div>;
};

export default SearchPage;
