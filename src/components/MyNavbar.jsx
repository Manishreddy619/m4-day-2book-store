import React from 'react';
import './MyNavbar.css';

import { Container, Navbar, Nav } from 'react-bootstrap';
const MyNavbar = () => {
	return (
		<Navbar
			collapseOnSelect
			expand='lg'
			bg='dark'
			variant='dark'
			className='nav-comp'>
			<img
				src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX31991160.jpg'
				alt='logo'
				style={{ width: '100px', marginRight: '20px' }}
			/>
			<Navbar.Brand href='#'>Amazon Book-Store</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link href='#'>Home</Nav.Link>
					<Nav.Link href='#'>About</Nav.Link>
					<Nav.Link href='#'>Broswe</Nav.Link>
					<Nav.Link href='#'>History</Nav.Link>
					<Nav.Link href='#'></Nav.Link>
					<Nav.Link href='#'>Horror</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link eventKey={2} href='#memes'>
						More About us
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default MyNavbar;
