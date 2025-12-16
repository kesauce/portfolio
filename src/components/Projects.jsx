import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '../styles/Project.css'
import ProjectCard from './ProjectCard';
import conchatImage from '../assets/images/conchat.png';
import teenyKitchenImage from '../assets/images/teenykitchen.png';

export default function Projects() {
	const projects = [
		{
			name: 'conchat',
			description: 'A simple customisable console chatroom. Select a username, colour, and room, and begin chatting! Choose from 5 public chatrooms or create your own private room to meet other users. Up to 50 messages are saved so you can keep up with the conversations. Easy for anyone to use!',
			link: 'https://github.com/kesauce/conchat',
			tools: ['Node.js', 'Vite', 'Node Package Manager', 'Docker', 'Git'],
			image: conchatImage,
			imageX: '0%',
			imageY: '100%'
		},
		{
			name: 'teenykitchen',
			description: "A cute cooking game where you guess Nova's favourite food! Combine ingredients in different ways but be careful, if you fail to guess, then Nova leaves.",
			link: 'https://github.com/kesauce/teenykitchen',
			tools: ['Phaser Library', 'Vite', 'Git'],
			image: teenyKitchenImage,
			imageX: '50%',
			imageY: '100%'
		},
	];

  return (
    <section className='main-content project'>
        <Splide options={ {
          perPage: 2,
          rewind : true,
		  perMove: 2,
        }}>
			{
			projects.map(project => {
				return(
					<SplideSlide key={project.name}>
						<ProjectCard name={project.name} description={project.description} link={project.link} tools={project.tools} image={project.image} imageX={project.imageX} imageY={project.imageY}/>
					</SplideSlide>
					
				)
			})
		}
		</Splide>
    </section>
  )
}