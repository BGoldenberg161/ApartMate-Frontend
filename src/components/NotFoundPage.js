import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../assets/images/PageNotFound.jpg';

class NotFoundPage extends React.Component {
	render() {
		return (
			<div>
				<img src={PageNotFound} />
				<h1 style={{ zIndex: 1 }}>404</h1>
				<p style={{ textAlign: 'center' }}>
					not all who wander are lost, except you
				</p>
				<p style={{ textAlign: 'center' }}>
					<Link to='/'>Go to Home </Link>
				</p>
			</div>
		);
	}
}
export default NotFoundPage;
