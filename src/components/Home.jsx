import portrait from '../assets/images/portrait.png'
import cv from '../assets/AMCV.pdf';
import '../styles/Home.css';

export default function Home() {

	const handlePDF = () => {
		window.open(cv, '_blank');
	};

	return (
		<section className='main-content home'>
			<div className='introduction'>
				<h1 className='agbalumo-regular'>Alexis Mañosca</h1>
				<h6 className='work-sans-p'>3rd Year Computer Science Student</h6>
				<p className='work-sans-p'>
					Hi! I'm Alexis. I'm studying Computer Science at the University of Waikato. I enjoy creating things
					and using tech to express myself. I love to make things that are enjoyable and easy to use. I am eager
					to learn new tools and make use of what I know to help others.

					I'm interested in web development, networking, AI, and cyber security.
				</p>
				<button onClick={handlePDF} className='cv-button'><span className='cv-span'>Download my CV</span></button>
			</div>

			<img src={portrait} className='portrait' />

		</section>
	)
}