import { useState } from 'react';
import NavBar from './components/Navbar.jsx'
import Body from './components/Body.jsx'

export default function App() {
	const [pageActive, setPageActive] = useState('Home');

	function changePage(newPage){
		setPageActive(newPage);
	}

  	return (
    	<>
			<NavBar activePage={pageActive} handleClick={changePage}/>
    		<Body />
		</>
  	)
}

