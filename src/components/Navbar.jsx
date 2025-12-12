export default function Navbar() {

  return (
    <nav>
        <button style={{'zIndex': 4, 'borderBottom': '4px solid var(--pink)'}}>Home</button>
        <button style={{'zIndex': 3}}>About Me</button>
        <button style={{'zIndex': 2}}>Projects</button>
        <button style={{'zIndex': 1}}>Contact</button>
	</nav>
  )
}