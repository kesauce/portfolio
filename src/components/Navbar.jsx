import { useState } from 'react';

export default function Navbar({ activePage, handleClick }) {
	const pages = ['Home', 'About Me', 'Projects', 'Contact'];
	const activeIndex = pages.indexOf(activePage);

	const [hovered, setHovered] = useState(null);

	const buttons = pages.map((page, index) => {
		// Find the distance between the current page and active page - then calculate the z index
		const distance = Math.abs(index - activeIndex);
		let zIndex = pages.length - distance;

		const isActive = page === activePage;
		const isHovered = page === hovered;
		const lift = isHovered ? -12 : 0;

		return(
			<button
				key={page}
				onClick={() => handleClick(page)}
				onMouseEnter={() => setHovered(page)}
				onMouseLeave={() => setHovered(null)}
				className={isActive ? 'active-page' : undefined}
				style={{
				zIndex: zIndex,
				}}
			>
				{page}
			</button>
		)
	});

  return (
    <nav>
		{buttons}
	</nav>
  )
}