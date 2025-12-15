import { useState } from 'react';
import NavBar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
	const [pageActive, setPageActive] = useState('Home');

	function changePage(newPage){
		setPageActive(newPage);
	}

	let pageComponent;

	switch (pageActive){
		case 'Home':
			pageComponent = <Home />;
			break;
		case 'About':
			pageComponent = <AboutMe />;
			break;
		case 'Projects':
			pageComponent = <Projects />
			break;
		case 'Contact':
			pageComponent= <Contact />
			break;
		default:
			pageComponent = <Home />;
			break;
	}

  	return (
    	<div className='page'>
			<NavBar activePage={pageActive} handleClick={changePage}/>
			{pageComponent}
		</div>
  	)
}

