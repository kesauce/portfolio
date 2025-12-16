import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import '../styles/Skills.css'
export default function SkillCard({ skill, subskills, link }){
    return(
        <div className='skill-card work-sans-p'>
            <h3>{skill} 
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </h3>
            
            <ul>
                {
                    subskills.map(sub =>{
                        return (
                            <li key={sub} className='sub-skill'>{sub}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}