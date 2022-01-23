// import { Popover } from 'bootstrap';
import React from 'react';
import { Card, Button, Popover, PopoverHeader, OverlayTrigger, PopoverBody, Dropdown } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';

const popover = () => (
    <Popover id='popover-basic'>
        <Popover.Title>Hey</Popover.Title>
        <Popover.Body>hihi</Popover.Body>
    </Popover>
);

const Profile = ({ name, occupation, interest, body }) => {
    return <div>
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="images/tony_stark.js/100px180" /> */}
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className='text-muted'>{occupation}</Card.Subtitle>
                <Card.Subtitle className='text-success py-2'>Interests: {interest}</Card.Subtitle>
                <Card.Text className='font-italic'>{body}</Card.Text>
                {/* <Button variant="primary" href='/profile'>See Profile</Button> */}
                {/* <OverlayTrigger trigger='click' placement='right' overlay={popover}>
                    <Button variant='primary'>See Profile</Button>
                </OverlayTrigger> */}
                <Dropdown className='text-justify'>
                <DropdownToggle variant='primary' id='dropdown-basic'>
                    See Contacts
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem href='https://www.linkedin.com/in/justintrudeau/?originalSubdomain=ca'>LinkedIn</DropdownItem>
                    <DropdownItem>Email</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </Card.Body>
        </Card>
    </div>;
};

// const popover = (
//     <Popover id='popover-basic'>

//     </Popover>
// );

export default Profile;
