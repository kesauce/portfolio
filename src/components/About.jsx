import Languages from "./Languages";

export default function About() {

  return (
    <section className='main-content about'>
        <div>
			<h1>Why I'm Here</h1>
			<p className='work-sans-p'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, aliquid eveniet? Rerum hic qui sunt reiciendis quidem quaerat sequi, veritatis consectetur laboriosam assumenda eveniet et aspernatur similique a consequatur cumque.
			</p>
		</div>
		<hr style={{borderTop: '2px solid var(--crimson)', width: '80%', color:'var(--crimson)'}}/>
		<div>
			<Languages />
		</div>
    </section>
  )
}