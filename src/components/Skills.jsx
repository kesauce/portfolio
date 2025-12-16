import '../styles/Skills.css'
import SkillCard from './SkillCard';

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
        {
            skills.map(skill => {
                return(
                    <SkillCard key={skill.skill} skill={skill.skill} subskills={skill.subSkill} link={skill.link}/>
                )
            })
        }
    </div>
  )
}