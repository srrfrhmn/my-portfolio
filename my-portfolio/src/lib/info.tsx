import ExpandableBar from '@/components/ExpandableBar'
import { FaGithub, FaExternalLinkAlt, } from 'react-icons/fa';
import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';

interface TermProp { 
    cd?: string;
}

export const Term = ({ cd = "~"}:TermProp) => {
    const commandPrompt = `(base) srrfrhmn@portfolio ${cd} %`;
    return <>{commandPrompt}</>;
};

export const FullName = () => {
    return (
        <>
            Sarraf Rahman
        </>
    )
}

export const ShortIntro = () => {
    return (
        <>
        Hello, I&apos;m Sarraf. I&apos;m a <b>software developer</b> and an <b>Honours Computer Science and Economics</b> student at <b> McMaster University</b>.
        </>
    )
}

export const LongIntro = () => {
    return (
        <>
        My  interest in emerging technologies drives me to work on contributing to open-source projects and engaging with developer communities. In addition to my academics, I actively focus on thinking of and building software solutions to real-world issues.
        </>
    )
}

export const Hobbies = () => {
    return (
        <>
        When I am not programming, I enjoy reading philosophy, losing in chess, and going to the gym.
        </>
    )
    }

export const University = () => {
    return (
        <>
        McMaster University
        </>
    )
}

export const Degree = () => {
    return (
        <>
        Honours Computer Science and Economics, <i> Hons. B.A. (2025) </i>
        </>
    )
}

interface ListProps {
    items: string[];
  }
  
const StringList: React.FC<ListProps> = ({ items }) => {
    return (
        <ul className="skills-list custom-arrow-list text-black black string-list">
        {items.map((item, index) => (
            <li key={index} className="skill-item string-list-item">{item}</li>
        ))}
        </ul>
    );
};

export default StringList;

const skills = [
    "Javascript",
    "Node.js",
    "React.js",
    "Java",
    "Spring",
    "Python",
  ];
  
export const Technologies = () => {
    return (
        <ul className="skills-list custom-arrow-list">
        {skills.map((skill, index) => (
            <li key={index} className="skill-item">
            {skill}
            </li>
        ))}
        </ul>
    )
}

const doorbieTech = ['Next.js', 'Node.js', 'gRPC', 'PostgreSQL', 'auth0', 'Stripe', 'GCP', 'Docker', 'Kubernetes', 'Istio', 'Jest'];
const blockwatchTech = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', ' Redux', 'JWT', 'Bcrypt.js', 'Axios'];
const dataLayerTech = ['Spring Boot', 'JDBC', 'PostgreSQL', 'Docker', 'HikariCP', 'Flyway'];
const chatAppTech = ['Kotlin', 'Kotlin Coroutines', 'Spring Boot', 'Spring Data', 'RSocket', 'Spring WebFlux', 'H2'];

export const Projects = () => {
    return (
        <>
            <ExpandableBar title="Doorbie">
                <p className='black desc'>An in-progress web application project that handles seamless transactions and interactions between landlords and tenants. This system alleviates the strain of property leasing for landlords while simultaneously streamlining the process for renters in their quest to find reputable landlords.</p>
                <StringList items={doorbieTech} />
                <div style={{display: 'flex', marginTop: '1em',}}>
                    {/*
                    <div style={{ marginRight:'0.5em', width: '20px', height: '20px' }}>
                        <a className='black' href="https://github.com/srrfrhmnn" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={20} />
                        </a>
                    </div>
                    
                    <div style={{ width: '20px', height: '20px' }}>
                        <a className='black' href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt size={18} />
                        </a>
                    </div>
                    */}
                </div>
            </ExpandableBar>
            <ExpandableBar title="Blockwatch">
                <p className='black desc'>Constructed a secure, full-stack web application inspired by CoinMarketCap. The system focuses on the seamless and secure tracking of digital assets. The back-end infrastructure is engineered with Node.js and MongoDB, ensuring reliable handling of user requests. The front-end utilizes React.js and Redux for effective state management, providing users a seamless experience. JWT tokens and bcrypt are employed for secure user login and session management. </p>
                <StringList items={blockwatchTech} />
                <div style={{display: 'flex', marginTop: '1em',}}>
                    <div style={{ marginRight:'0.5em', width: '20px', height: '20px' }}>
                        <a className='black' href="https://github.com/srrfrhmnn/Blockwatch2" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={20} />
                        </a>
                    </div>
                    {/*
                    <div style={{ width: '20px', height: '20px' }}>
                        <a className='black' href="https://github.com/srrfrhmnn" target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt size={18} />
                        </a>
                    </div>
                    */}
                </div>
            </ExpandableBar>
            <ExpandableBar title="App Data Layer">
                <p className='black desc'>This project is an intricate project that leverages several technologies to design a scalable data access layer. This project ensures seamless interactions between multiple components of an application and a PostgreSQL database. By integrating the HikariCP Connection Pool, it optimally manages the application performance and scalability for frequent and recurring database connections. The use of Docker simplifies deployment, making the system more robust and efficient.</p>
                <StringList items={dataLayerTech} />
                <div style={{display: 'flex', marginTop: '1em',}}>
                    {/*
                    <div style={{ marginRight:'0.5em', width: '20px', height: '20px' }}>
                        <a className='black' href="https://github.com/srrfrhmnn" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={20} />
                        </a>
                    </div>
                    
                    <div style={{ width: '20px', height: '20px' }}>
                        <a className='black' href="https://github.com/srrfrhmnn" target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt size={18} />
                        </a>
                    </div>
                    */}
                </div>
            </ExpandableBar>
            <ExpandableBar title="Chat Application">
                <p className='black desc'>This end-to-end project aims to create a seamless communication environment for users, fostering real-time interactions. The application is optimized for performance, utilizing Kotlin Coroutines with Spring WebFlux for efficient handling of user requests. RSocket is deployed to ensure non-blocking communication between microservices, enabling a smoother user experience.</p>
                <StringList items={chatAppTech} />
                <div style={{display: 'flex', marginTop: '1em',}}>
                    {/*
                    <div style={{ marginRight:'0.5em', width: '20px', height: '20px' }}>
                        <a className='black' href="https://github.com/srrfrhmnn" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={20} />
                        </a>
                    </div>
                    
                    <div style={{ width: '20px', height: '20px' }}>
                        <a className='black' href="https://github.com/srrfrhmnn" target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt size={18} />
                        </a>
                    </div>
                    */}
                </div>
            </ExpandableBar>
        </>
    )
}

export const Contact = () => {
    return (
        <>
            <div style= {{display: 'flex' , marginTop: '0.8em', marginLeft: '0.2em'}}>
                <div style={{marginLeft: '0.2em'}}>
                    <a className='' href="https://github.com/srrfrhmnn" target="_blank" rel="noopener noreferrer">
                        <AiOutlineGithub size={24} />
                    </a>
                </div>
                <div style={{marginLeft: '0.2em'}}>
                    <a className='' href="https://www.linkedin.com/in/srrfrhmn/" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin size={24} />
                    </a>
                </div>
                <div style={{marginLeft: '0.4em'}}>
                    <a className='' href="mailto:srrfrhmn@gmail.com" target="_blank" rel="noopener noreferrer">
                        <AiOutlineMail size={24} />
                    </a>
                </div>
            </div>
        </>
    )
}