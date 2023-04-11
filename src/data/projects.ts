import technologies, { Technology } from './technologies';

export type Project = {
  name: string;
  logo?: string;
  url?: string;
  technologies: Technology[];
  description: string;
};

const projects: Project[] = [
  {
    name: 'BZGroup',
    logo: '/images/projects/bzgroup.png',
    technologies: technologies.filter(technology =>
      [
        'NodeJS',
        'Typescript',
        'PHP',
        'PHPUnit',
        'Python',
        'React',
        'Mongodb',
        'Jest',
        'Postgresql',
        'NextJS',
        'NestJS',
        'Tailwindcss',
        'Ant Design',
        'WebRTC',
        'Asterisk',
        'Redis',
        'Docker',
      ].includes(technology.name)
    ),
    url: 'https://bzgroup.pl',
    description:
      'Developed in Node.js, React, PHP, and Python. \
    I worked closely with stakeholders to understand their \
    requirements and translate them into functional specifications.\
    In addition to leading the design and implementation of the applications architecture, \
    I managed integrations with third-party services and systems to ensure seamless operation. \
    I was responsible for testing, debugging, and continuously monitoring the applications, \
    as well as coordinating the efforts of my team members to meet project milestones and \
    deliver quality work. My experience in full-stack development and project\
     management has given me a strong foundation to deliver high-quality solutions that meet business needs.',
  },
  {
    name: 'Blockchain Analytics Tool',
    technologies: technologies.filter(technology =>
      ['Typescript', 'React', 'Jest', 'MaterialUI', 'Docker'].includes(
        technology.name
      )
    ),
    description:
      'I implemented a blockchain analysis tool that allowed users to analyze transactions \
      across multiple blockchains. Throughout the project, I conducted extensive \
      user research and collaborated closely with the backend team to ensure that the \
      frontend integrated seamlessly with the backend APIs. I also tested and debugged \
      the frontend code, ensuring that it met high standards of quality and performance.\
      Overall, my experience in implementing the frontend of a blockchain analysis tool \
      has equipped me with strong skills in frontend development, project management, \
      and user experience design.',
  },
  {
    name: 'Raven Media',
    logo: '/images/projects/ravenmedia_logo_150_1.svg',
    technologies: technologies.filter(technology =>
      [
        'Typescript',
        'React',
        'Jest',
        'NextJS',
        'Tailwindcss',
        'Ant Design',
        'PHP',
        'Symfony',
        'Elasticsearch',
        'Redis',
      ].includes(technology.name)
    ),
    url: 'https://ravenmedia.pl',
    description:
      'Digitizing a newspaper by rewriting each newspaper title as website written in React.\
      SEO was a critical part of the project, \
      I worked diligently to ensure that the digital versions of the \
      newspaper titles were optimized for search engines. In addition to developing the API, \
      I was responsible for writing the front-end code in React, based on mockups \
      Overall, my experience in full-stack development, project management, and SEO has enabled me \
      to deliver high-quality solutions that meet business needs.',
  },
  {
    name: 'Availo integration tool',
    logo: '/images/projects/availo.jpg',
    url: 'https://availo.pl',
    technologies: technologies.filter(technology =>
      ['Typescript', 'NextJS', 'Jest', 'Mysql', 'RabbitMQ', 'Docker'].includes(
        technology.name
      )
    ),
    description:
      'I led the development of an integration tool using NestJS \
      based on REST API, and tRPC to enable bi-directional communication between services. \
      I designed and implemented the backend architecture, ensuring that the tool was easy to use and reliable.\
      Overall, my experience in developing \
      an integration tool using NestJS, REST API, and tRPC has equipped me with strong skills \
      in backend development, project management, and user experience design.',
  },
  {
    name: 'BZSolutions',
    logo: '/images/projects/bzsolutions.png',
    technologies: technologies.filter(technology =>
      [
        'NodeJS',
        'Typescript',
        'PHP',
        'PHPUnit',
        'Python',
        'React',
        'Mongodb',
        'Jest',
        'Postgresql',
        'NextJS',
        'NestJS',
        'Tailwindcss',
        'Ant Design',
        'WebRTC',
        'Asterisk',
        'Redis',
        'Docker',
      ].includes(technology.name)
    ),
    url: 'https://bzsolutions.pl',
    description:
      'Developed in Node.js, React, PHP. \
    I worked closely with stakeholders to understand their \
    requirements and translate them into functional specifications.\
    In addition to leading the design and implementation of the applications architecture, \
    I managed integrations with third-party services and systems to ensure seamless operation. \
    I was responsible for testing, debugging, and continuously monitoring the applications, \
    as well as coordinating the efforts of my team members to meet project milestones and \
    deliver quality work. My experience in full-stack development and project\
     management has given me a strong foundation to deliver high-quality solutions that meet business needs.',
  },
  {
    name: 'Smart home @👨‍👩‍👧‍👦🏠',
    technologies: technologies.filter(technology =>
      [
        'NodeJS',
        'Typescript',
        'Python',
        'Docker',
        'Node-RED',
        'Arduino',
        'Linux',
      ].includes(technology.name)
    ),
    description:
      "I created a smart home using , arduino-like boards, \
  along with PCB boards that I prototyped. \
  I connected the smart home system using MQTT protocols, \
  allowing for seamless integration and remote monitoring and control. \
  To automate the smart home system, I used Node-RED's visual programming \
  tool to create custom automations that control the different parts of the \
  smart home system based on environmental conditions, user preferences, \
  and other factors. Overall, I successfully completed this project, \
  which involved both hardware and software development. \n\
  //P.S. When it comes to clients, family members (especially spouses) are the most demanding.",
  },
];

export default projects;
