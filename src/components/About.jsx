import Languages from "./Languages";
import Skills from "./Skills";
import '../styles/About.css';

export default function About() {

	return (
		<section className='main-content about'>
			<div>
				<h1>Why I'm Here</h1>
				<p className='work-sans-p'>
					Ever since I was young, I've always been interested in computers. I've always loved how you can discover, learn and do so many things over the internet. Now that I've learnt more, I realised that there are so many ways to improve one's experience. Privacy, safety, accessibility.
				</p>
			</div>
			<hr style={{ borderTop: '2px solid var(--crimson)', width: '80%', color: 'var(--crimson)' }} />
			<div className='list-sections'>
				<Languages />
				<Skills />
			</div>
		</section>
	)
}