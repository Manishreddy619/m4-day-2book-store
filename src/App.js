import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyFooter from './components/MyFooter';
import Jumbo from './components/Jumbo';
import History from './components/History';
import Romance from './components/Romance';
import Horror from './components/Horror';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar
					collapseOnSelect
					expand='lg'
					bg='dark'
					variant='dark'
					style={{ position: 'sticky', top: '0', zIndex: '999' }}>
					<img
						src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX31991160.jpg'
						alt='logo'
						style={{ width: '100px', marginRight: '20px' }}
					/>
					<Navbar.Brand href='#'>Amazon Book-Store</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='mr-auto'>
							<Router>
								<Nav.Link href='/'>Home</Nav.Link>
								<Nav.Link href='/about'>About</Nav.Link>
								<Nav.Link href='#'>Broswe</Nav.Link>
								<Nav.Link href='./History'>History</Nav.Link>
								<Nav.Link href='./Horror'>Horror</Nav.Link>
								<Nav.Link href='./Romance'>Romance</Nav.Link>
							</Router>
						</Nav>
						<Nav>
							<Nav.Link eventKey={2} href='#memes'>
								More About us
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Jumbo />
				<Switch>
					<Route path='/' exact>
						<History />
						<MyFooter />
					</Route>
					<Route path='/History' exact>
						<History />
						<MyFooter />
					</Route>
					<Route path='/Horror' exact>
						<Horror />
						<MyFooter />
					</Route>
					<Route path='/Romance' exact>
						<Romance />
						<MyFooter />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
