import ExpandableBar from '@/components/ExpandableBar'
import { FaGithub, FaExternalLinkAlt, } from 'react-icons/fa';
import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';

interface TermProp { 
    cd?: string;
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
        building square wheels to understand why they& circles.
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

interface BioProps {
  workPlace?: string;
  workPosition?: string;
  university?: string;
  degree?: string;
}

export const Bio: React.FC<BioProps> = ({ workPlace, workPosition, university, degree }) => {
  return (
    <div className='default-font responsive-desc'>
      {workPlace && workPosition && (
        <span className="text-neutral-500">
          I&apos;m currently working as a{' '}
          <span className="text-neutral-400">{workPosition}</span>{' '}
          at{' '}
          <a href={`https://${workPlace.toLowerCase().replace(/\s+/g, '')}.com`} className='text-neutral-400 hover:underline' target="_blank" rel="noopener noreferrer">
            {workPlace}
          </a>
          .{' '}
        </span>
      )}
      {university && degree && (
        <span className="text-neutral-500">
          {workPlace ? "I'm also " : "I'm currently "}
          pursuing a{' '}
          <span className="text-neutral-400">{degree}</span>{' '}
          at{' '}
          <a href={`https://www.${university.toLowerCase().replace(/\s+/g, '')}.edu`} className='text-neutral-400 hover:underline' target="_blank" rel="noopener noreferrer">
            {university}
          </a>
          .
        </span>
      )}
      {/* <span className="text-neutral-500">
        {' '}My passion lies in leveraging technology to solve real-world problems and contribute to open-source projects.
      </span> */}
    </div>
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
    const contactLinks = [
        { href: "https://www.linkedin.com/in/srrfrhmn/", Icon: AiFillLinkedin },
        { href: "https://github.com/srrfrhmn", Icon: AiOutlineGithub },
        { href: "mailto:srrfrhmn@gmail.com", Icon: AiOutlineMail },
    ];

    return (
        <div className="flex">
            {contactLinks.map(({ href, Icon }, index) => (
                <a
                    key={index}
                    className="ml-1"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon size={20} />
                </a>
            ))}
        </div>
    );
};

export const HL = () => {
    return ( <hr className='my-6 border-neutral-100 dark:border-neutral-800' /> )
}

export const AnimatedWave = () => {
  return (
    <span className="ml-3 inline-flex space-x-1">
      <span className="w-0.5 h-4 bg-gray-600 rounded-full animate-wave"></span>
      <span className="w-0.5 h-4 bg-gray-600 rounded-full animate-wave" style={{animationDelay: '0.2s'}}></span>
    </span>
  );
};

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