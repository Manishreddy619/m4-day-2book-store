import React from 'react';
import { Card } from 'react-bootstrap';

const MyFooter = () => {
	return (
		<div>
			<Card>
				<Card.Header>Copy Rights</Card.Header>
				<Card.Body>
					<blockquote className='blockquote mb-0'>
						{/* <p>
							{' '}
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
							posuere erat a ante.{' '}
						</p> */}
						<footer className='blockquote-footer'>
							Book Store{' '}
							<cite title='Source Title'>Buy all Books you wish</cite>
							<p>
								© 2021– Copyright Clearance Center, Inc. All rights reserved by
								Manish.
							</p>
						</footer>
					</blockquote>
				</Card.Body>
			</Card>
		</div>
	);
};

export default MyFooter;
