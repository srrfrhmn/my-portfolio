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

export const Ascii = () => {
    <>
    <p>
⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⢻⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ⢠⣾
⢸⠀⠻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⢤⣶⠶⠶⢶⣶⡤⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠀&nbsp;&nbsp;&nbsp;&nbsp;⢀⣴⠋⢀⠇
⠈⣇⠀⠈⠻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡴⠞⠋⢉⡴⠞⠋⣿⠀⠀⠀⡯⠙⠳⣦⡉⠙⠲⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⠁⠀⣼⠀
⠀⠹⣆⠀⠀⠈⠛⢦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠋⠀⢀⣰⠏⠀⠀⠀⢻⡄⠀⢰⠇⠀⠀⠈⢻⣄⠀⠀⠙⢷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡶⠋⠁⠀⠀⣰⠃⠀
⠀⠀⠹⣇⠀⠀⠀⠀⠉⠳⢦⣄⡀⠀⠀⠀⢀⡾⠃⠀⣠⠞⠋⠁⠀⠀⠀⠀⠀⠉⠉⠉⠀⠀⠀⠀⠀⠉⠙⢷⣄⠀⠙⢧⡀⠀⠀⠀⢀⣠⡶⠛⠁⠀⠀⠀⠀⣴⠃⠀⠀
⠀⠀⠀⠙⢧⡀⠀⠀⠀⠀⠀⠈⠙⠳⠶⢤⣿⣄⣀⣸⠋⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⢹⣆⣀⣨⣷⡤⠶⠚⠋⠁⠀⠀⠀⠀⠀⢠⡾⠃⠀⠀⠀
⠀⠀⠀⠀⠈⠻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡇⠈⡇⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⣼⠀⣼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠏⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠻⢦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⣧⠀⠀⠀⠀⠀⠀⠀⣷⠀⠀⠀⠀⠀⠀⠀⡟⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡴⠛⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠳⣦⣀⠀⠀⠀⠀⠀⠀⢀⡟⠀⡏⠀⠀⠀⠀⠀⠀⢀⣿⠀⠀⠀⠀⠀⠀⠀⣿⠀⢿⡀⠀⠀⠀⠀⠀⠀⣠⡴⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡆⠉⢻⡶⢤⣀⡀⢀⡾⠁⣼⠃⠀⠀⠀⠀⠀⠀⣸⠹⣆⠀⠀⠀⠀⠀⠀⠹⣆⠘⢧⡀⢀⣠⡤⢶⡟⠉⢰⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡏⣧⠀⢸⠃⠀⣨⠿⠋⣠⠞⠁⠀⠀⠀⠀⠀⠀⢸⡏⠀⣹⡆⠀⠀⠀⠀⠀⠀⠘⢦⣈⠛⢿⡅⠀⢸⡇⠀⡿⢻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡕⣿⣧⣸⡀⠀⠛⡶⢶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣹⠰⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠶⣾⠃⠀⢸⣇⡼⡿⢸⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣇⠘⢯⡙⠷⣄⣸⠇⠀⠹⣆⠀⠀⠀⠀⠀⠀⠀⣴⠃⠀⠹⣄⠀⠀⠀⠀⠀⠀⢀⣼⠃⠀⢹⣆⣠⠞⣫⡿⠁⣼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣄⢀⠙⢷⡘⣿⣷⡶⣄⠙⠷⣄⡀⠀⠀⠀⠘⠁⠀⠀⠀⠈⠃⠀⠀⠀⢀⣴⠞⢁⣤⢶⣾⡿⢡⡾⠋⡀⣰⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⠀⠸⣇⠈⣻⣷⣿⠳⣤⡈⠙⠓⠄⠀⠈⠳⡄⠀⣰⠛⠁⠀⠠⠞⠋⢀⣴⠟⣇⣿⡟⠀⣾⠀⠀⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡄⠀⠻⣾⠏⠸⣿⣦⡈⠛⠶⢤⣤⣤⣤⠴⡷⠶⣿⠦⣤⣤⣤⡤⠾⠋⢁⣼⣿⠁⠹⣶⠏⠀⢰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⣄⠀⣿⠀⠀⠘⠿⣿⣦⣤⢴⣿⡿⠃⠀⡷⠛⣦⠀⠘⢿⣷⠦⣤⣶⣿⠟⠁⠀⢀⡿⢀⣰⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣷⠘⣷⣄⠀⠀⠀⠉⠉⠉⠁⠀⠀⠀⡇⠀⡟⠀⠀⠀⠉⠉⠉⠉⠀⠀⠀⣠⣾⠁⡟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣴⡏⢹⢷⣦⣄⡀⠀⣀⣤⡤⢤⡀⡧⠀⠇⢀⡤⢤⣤⡀⠀⣀⣠⣴⣿⡏⢻⣼⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠈⣧⢸⡾⠁⣨⣿⡟⠙⢯⣀⠀⠀⠀⠀⠀⠀⢀⣀⡿⠉⢻⢿⡁⠘⣿⠃⡿⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⡓⠶⠶⠿⡛⠥⠞⠉⢠⣿⣄⡀⠉⠉⠻⣦⣀⡴⠛⠉⠉⢀⣴⣿⡀⠙⠲⠬⣻⠷⠶⠶⢚⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠦⣄⣀⣀⣀⣠⣴⡋⢻⣿⡛⢳⠒⣤⠼⣿⠧⣤⢲⡞⢻⣿⠋⢹⡦⣄⣀⣀⣀⣤⠔⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠹⣆⠈⠛⣾⣿⣧⣿⠙⠛⠓⠛⠚⠛⢋⣇⡾⣿⣷⠋⠀⣼⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣷⡀⣿⣿⣆⠙⠃⠀⠀⠀⠀⠀⠘⠋⣼⡿⣿⢠⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢳⡿⣮⡙⠛⣟⣻⣯⣯⣽⣟⣿⠛⢋⣴⣷⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣼⣏⠛⣋⣤⠶⠒⠶⣤⣙⠛⣹⢰⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣧⡉⠉⠉⠀⣠⣤⡄⠀⠉⠉⢁⣼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠲⠤⠞⠋⠀⠙⠶⠤⠖⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                </p>
    </>
}

export const FullName = () => {
    return (
        <>
            sarraf rahman
        </>
    )
}

export const ShortIntro = () => {
    return (
        <>
        Hello, I&apos;m Sarraf. I&apos;m a <b className='underline'>software developer</b>.
        </>
    )
}

export const LongIntro = () => {
    return (
        <>
        My  interest in emerging technologies drives me to contribute to open-source projects and engage with developer communities. In addition to my academic pursuits, I actively focus on building software solutions to real world issues.
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
        Honours Bachelor of Arts in Computer Science and Economics <i> Hons. B.A. (4th year) </i>
        </>
    )
}

export const Education = () => {
    return (
        <>
            <div className='responsive-desc'>
                <span className="text-neutral-500">I&apos;m currently a student at</span>{' '}
                <a href="https://www.mcmaster.ca" className='' target="_blank" rel="noopener noreferrer">
                <span className="text-neutral-400">McMaster University </span>
                </a>{' '}
                <span className="text-neutral-500">pursuing an Honours Bachelor of Arts in Computer Science and Economics.</span>
            </div>
        </>
    );
};


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
                <p className='black'>An in-progress web application project that enables seamless interactions between landlords and tenants.</p>
                <StringList items={doorbieTech} />
                <div style={{display: 'flex', marginTop: '1em',}}>
                    <div style={{ marginRight:'0.5em', width: '20px', height: '20px' }}>
                        <a className='black' href="https://github.com/srrfrhmnn" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={20} />
                        </a>
                    </div>
                    {/*
                    <div style={{ width: '20px', height: '20px' }}>
                        <a className='black' href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt size={18} />
                        </a>
                    </div>
                    */}
                </div>
            </ExpandableBar>
            <ExpandableBar title="Blockwatch">
                <p className='black'>Constructed a secure, full-stack web application inspired by CoinMarketCap.</p>
                <StringList items={blockwatchTech} />
                <div style={{display: 'flex', marginTop: '1em',}}>
                    <div style={{ marginRight:'0.5em', width: '20px', height: '20px' }}>
                        <a className='black' href="https://github.com/srrfrhmnn/Blockwatch2" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={20} />
                        </a>
                    </div>
                    {/*
                    <div style={{ width: '20px', height: '20px' }}>
                        <a className='black' href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt size={18} />
                        </a>
                    </div>
                    */}
                </div>
            </ExpandableBar>
            <ExpandableBar title="App Data Layer">
                <p className='black'>Architected a performant and scalable data access layer for a movie app.</p>
                <StringList items={dataLayerTech} />
                <div style={{display: 'flex', marginTop: '1em',}}>
                    <div style={{ marginRight:'0.5em', width: '20px', height: '20px' }}>
                        <a className='black' href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={20} />
                        </a>
                    </div>
                    {/*
                    <div style={{ width: '20px', height: '20px' }}>
                        <a className='black' href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt size={18} />
                        </a>
                    </div>
                    */}
                </div>
            </ExpandableBar>
            <ExpandableBar title="Chat Application">
                <p className='black'>Designed an efficient end-to-end chat application.</p>
                <StringList items={chatAppTech} />
                <div style={{display: 'flex', marginTop: '1em',}}>
                    <div style={{ marginRight:'0.5em', width: '20px', height: '20px' }}>
                        <a className='black' href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={20} />
                        </a>
                    </div>
                    {/*
                    <div style={{ width: '20px', height: '20px' }}>
                        <a className='black' href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
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

export const HL = () => {
    return ( <hr className='my-6 border-neutral-100 dark:border-neutral-800' /> )
}

export const ScrollDown = () => {
    return (
        <>
            <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    )
}