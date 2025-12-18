import '../styles/Project.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProjectCard from './ProjectCard';
import conchatImage from '../assets/images/conchat.png';
import teenyKitchenImage from '../assets/images/teenykitchen.png';
import nlpImage from '../assets/images/natural_language_processing.png'
import graphImage from '../assets/images/graphs.png';
import chaserImage from '../assets/images/chaser.jpg';
import parkImage from '../assets/images/parkapp.png';
import udpImage from '../assets/images/udp.png';

export default function Projects() {
	const projects = [
		{
			name: 'ConChat',
			description: 'A simple customisable console chatroom. Select a username, colour, and room, and begin chatting! Choose from 5 public chatrooms or create your own private room to meet other users. Up to 50 messages are saved so you can keep up with the conversations. Easy for anyone to use!',
			link: 'https://github.com/kesauce/conchat',
			tools: ['Node.js', 'Vite', 'Node Package Manager', 'Docker'],
			image: conchatImage,
			imageX: '0%',
			imageY: '100%'
		},
		{
			name: 'Teeny Kitchen',
			description: "A cute cooking game where you guess Nova's favourite food! Combine ingredients in different ways but be careful, if you fail to guess, then Nova leaves.",
			link: 'https://github.com/kesauce/teenykitchen',
			tools: ['Phaser Library', 'Vite'],
			image: teenyKitchenImage,
			imageX: '50%',
			imageY: '100%'
		},
		{
			name: 'Natural Language Processing',
			description: "An algorithm that studies a sample data and predicts the next word, given the context. From the sample, it creates the probability of each word/phrase. The n-gram model uses these probabilities to predict the next word. Like autocomplete!",
			link: 'https://github.com/kesauce/COMPX216_Assignment3',
			tools: ['AIMA Python Library', 'AI Algorithms', 'Probability'],
			image: nlpImage,
			imageX: '3%',
			imageY: '0%'
		},
		{
			name: 'Graphs',
			description: "A routing app that uses a graph data structure. Add, delete, and find cities as well as routes between two cities. Find reachable cities given the amount and types of paths you can take.",
			link: 'https://github.com/kesauce/COMPX201_Assignment4',
			tools: ['Graph Data Structure', 'JUnit Testing', 'Search Algorithms'],
			image: graphImage,
			imageX: '0%',
			imageY: '0%'
		},
		{
			name: 'Chaser',
			description: "A game with a bouncing light, implemented on a FPGA. Speed it up, slow it down, or add boundaries using the buttons and switches.",
			link: '',
			tools: ['FPGA Design', 'Hardware', ''],
			image: chaserImage,
			imageX: '50%',
			imageY: '70%'
		},
		{
			name: 'Park Info',
			description: "A real-time park locator application. Use your location to find nearby parks and information on them. Uses Google Maps and Places API for accurate data and location services for relative parks.",
			link: 'https://github.com/kesauce/COMPX202_Assignment3',
			tools: ['APIs', 'Group Collaboration', 'Mobile Software'],
			image: parkImage,
			imageX: '50%',
			imageY: '20%'
		},
		{
			name: 'File Download',
			description: "A file download service where you can request a file from a server to download. Cleanly and reliably download files using UDP and error catching.",
			link: 'https://github.com/kesauce/COMPX234_Assignment3',
			tools: ['UDP', 'Datagram Sockets', 'Networking'],
			image: udpImage,
			imageX: '50%',
			imageY: '100%'
		}
	];

  return (
    <section className='main-content'>
		<Swiper
			modules={[Navigation, Pagination]}
			cssMode={true}
			loop={true}
			pagination={{ clickable: true }}
			navigation={true}
			breakpoints={{
				0: { slidesPerView: 1 },
				1024: { slidesPerView: 2 },
			}}
			>
			{projects.map((project) => (
				<SwiperSlide key={project.name}>
				<ProjectCard
					name={project.name}
					description={project.description}
					link={project.link}
					tools={project.tools}
					image={project.image}
					imageX={project.imageX}
					imageY={project.imageY}
				/>
				</SwiperSlide>
			))}
    	</Swiper>
    </section>
  )
}