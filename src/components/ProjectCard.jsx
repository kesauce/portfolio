import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjectCard({ name, description, link, tools, image, imageX, imageY}) {

  return (
    <div className='project-card'>
        
        <div className='image-container'>
            <img src={image} alt={`${name} image`} style={{
                "--image-x": imageX,
                "--image-y": imageY
            }}/>
        </div>
        <h1>{name}</h1>
        <div className='info-container work-sans-p'>
            <p>{description}</p>
            <ul>
                {
                    tools.map(tool => {
                        return(
                            <li key={tool}>{tool}</li>
                        )
                    })
                }
            </ul>
            <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link project-link"
                >
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
    </div>
  )
}