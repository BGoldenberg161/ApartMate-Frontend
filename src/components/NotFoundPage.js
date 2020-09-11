import React from 'react';
import broken from '../assets/images/PageNotFound.jpg';
import '../assets/brokenpage.css';

class NotFoundPage extends React.Component {
	render() {
		return (
			<>
				<h1 class='title'>Aww... Don't cry..</h1>
				<p class='zoom-area'>
					<b>not</b> all who wander are lost.{' '}
				</p>
				<section class='error-container'>
					<span>4</span>
					<span>
						<span class='screen-reader-text'>0</span>
					</span>
					<span>4</span>
				</section>
				<p class='zoom-area'>
					<b>..except you..</b>
				</p>
				<div class='link-container'>
					<a
						target='_blank'
						href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
						class='more-link'
					>
						We got your back [click here]
					</a>
				</div>
			</>
		);
	}
}
export default NotFoundPage;
