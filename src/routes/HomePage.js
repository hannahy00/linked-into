import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Navigation from '../components/Navigation';

const HomePage = () => {
    return <div>
        <Navigation />
        <h1 className='p-3'>
            Connect with users who want to connect with you!
        </h1>
        <Container className='py-3 px-10 mx-10'>
        <p>
            LinkedInto allows users to find others who are actively looking to connect with people. 
            Contact someone and be reassured that they want to connect with you too! 
        </p>
        </Container>
        <h3>Build your network with ease.</h3> 
        <Button href='/search'>Start Searching</Button>      
    </div>;
};

export default HomePage;
