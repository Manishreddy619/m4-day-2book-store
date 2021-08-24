import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Jumbo.css';

const Jumbo = () => {
	return (
		<div>
			<Jumbotron className='jumbo'>
				<h1 className='display-3'>Amazon Book Store</h1>
				<p className='lead'>
					“I love walking into a bookstore. It's like all my friends are sitting
					on shelves, waving their pages at me.”
				</p>
				<hr className='my-2' />
				{/* <p>
					The quality of the content is not determined by the section it sits in
					in the bookstore.
				</p> */}
				{/* <p className='lead'>
					<Button color='primary'>Learn More</Button>
				</p> */}
			</Jumbotron>
		</div>
	);
};

export default Jumbo;
