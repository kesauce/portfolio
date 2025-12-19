import Languages from "./Languages";
import Skills from "./Skills";
import '../styles/About.css';
import bass from '../assets/images/bass.jpg';

export default function About() {

	return (
		<section className='main-content about'>
			<div className='list-sections'>
				<Languages />
				<Skills />
			</div>
			<hr style={{ borderTop: '2px solid var(--crimson)', width: '80%', color: 'var(--crimson)', marginTop: '30px'}} />
			<div>
				<h1>My Story</h1>
				<p className='work-sans-p'>
					Ever since I was young, I've always been interested in computers. I've always loved how you can discover, learn and do so many things over the internet. Now that I've learnt more, I realised that there are so many ways to improve one's experience. Privacy, safety, accessibility, and the transition of getting used to new emerging technology. I want to bridge the gap between computers and people, and share just how amazing the virtual world is. Whether that's designing accessible UI or improving the security and privacy of users, I ultimately want to improve the quality of life of everyone. 
				</p>
				<p className='work-sans-p'>
					Outside of my studies, I am a musician and dancer! Just like my interest in computers, I've also been sharing my love and passion for the arts to others. I'm always finding ways to give back to my community through teaching guitar, playing my music, and sharing my culture.
				</p>
				<div className='about-images'>
					<img src={bass} alt='Alexis playing bass'/>
				</div>
			</div>
		</section>
	)
}