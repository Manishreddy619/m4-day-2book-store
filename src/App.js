import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import Jumbo from './components/Jumbo';
import History from './components/History';
import Romance from './components/Romance';
import Horror from './components/Horror';

function App() {
	return (
		<div className='App'>
			<MyNavbar />
			<Jumbo />
			<History />
			<Romance />
			<Horror />
			<MyFooter />
		</div>
	);
}

export default App;
