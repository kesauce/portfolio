import '../styles/Languages.css'
export default function Languages() {
	const languages = [
		{language: 'HTML', progress: '99%'},
		{language: 'CSS', progress: '99%'},
		{language: 'Javascript', progress: '99%'},
		{language: 'Java', progress: '99%'},
		{language: 'C#', progress: '99%'},
		{language: 'Python', progress: '99%'},
		{language: 'SQL', progress: '90%'},
		{language: 'PHP', progress: '80%'},
		{language: 'WRAMP Assembly', progress: '70%'},
		{language: 'C', progress: '70%'},
		{language: 'Verilog', progress: '70%'},
		{language: 'R', progress: '60%'},
		{language: 'C++', progress: '50%'},
	]

  return (
    <div className='language-list'>
        <h1>Language Proficiency</h1>
        <ul className="work-sans-p">
            {
				languages.map(lang => {
					return(
						<li key={lang.language}>
							{lang.language}
							<div 
								className='progress-bar' 
								style={{'--progress': lang.progress}}>
							</div>
						</li>
					)
				})
			}
        </ul>
    </div>
  )
}