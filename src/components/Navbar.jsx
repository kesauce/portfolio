export default function Navbar({ activePage, handleClick }) {
	const pages = ['Home', 'About Me', 'Projects', 'Contact'];
	const activeIndex = pages.indexOf(activePage);

  return (
    <nav>
		{
			pages.map((page, index) =>{
				const distance = Math.abs(index - activeIndex);
				const zIndex = pages.length - distance;

				const isActive = page === activePage;

				return(
					<button
						key={page}
						onClick={() => handleClick(page)}
						style={{
						zIndex: zIndex,
							borderBottom: isActive ? '4px solid var(--pink)' : undefined,
							backgroundColor: isActive ? 'var(--pink)' : undefined,
							color: isActive ? 'var(--crimson)' : undefined,
						}}
					>
						{page}
					</button>
				)
			})
		}
	</nav>
  )
}