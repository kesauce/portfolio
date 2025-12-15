import '../styles/Skills.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
    const skills = [
        {   
            skill: 'Web Development', 
            subSkill: ['React.js', 'Node.js'], 
            link: 'https://github.com/kesauce/portfolio'
        },
        {
            skill: 'Database Management', 
            subSkill: ['Schema Design', 'SQL Queries'],
            link: 'https://github.com/kesauce/COMPX225_Deliverable3'
        },
        {
            skill: 'Networking',
            subSkill: ['TCP and UDP', 'Websockets'],
            link: 'https://github.com/kesauce/COMPX234_Assignment3'
        },
        {
            skill: 'Data Structures and Algorithms',
            subSkill: ['Trees', 'Graphs', 'Hash Tables'],
            link: 'https://github.com/kesauce/COMPX201_Assignment4'
        },
        {
            skill: 'Artificial Intelligence',
            subSkill: ['AI Algorithms', 'Natural Language Processing', 'Machine Learning'],
            link: 'https://github.com/kesauce/COMPX216_Assignment3'
        },
        {
            skill: 'Mobile Computing',
            subSkill: ['Software Architechtures', 'APIs'],
            link: 'https://github.com/kesauce/COMPX202_Assignment2'
        },
        {
            skill: 'DevOps',
            subSkill: ['Git', 'Docker'],
            link: 'https://github.com/kesauce/conchat'
        },
        {
            skill: 'Computer Hardware',
            subSkill: ['FPGAs', 'RISC Microprocessors', 'Assembly and Machine Code'],
            link: ''
        }
        

    ]

  return (
    <div className='skills-list'>
        <h1>Technical Skills</h1>
        <ul className="work-sans-p">
            {
                skills.map(skill => {
                    return(
                        <li>
                            {
                                skill.link != null ? 
                                <a
                                    href={skill.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="github-link"
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </a> : undefined
                            }

                            {skill.skill}

                            {
                                skill.subSkill != null ?
                                <ul>
                                    {
                                        skill.subSkill.map(sub => {
                                            return(<li key={sub} className='sub-skill'>{sub}</li>)
                                        })
                                    }
                                </ul> : undefined
                            }
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}