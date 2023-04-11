import technologiesData, {
  Category,
  Technology as TechnologyData,
} from '@/data/technologies';
import { DiAsterisk } from 'react-icons/di';
import {
  SiAngular,
  SiAntdesign,
  SiApachecassandra,
  SiApachejmeter,
  SiArduino,
  SiAwslambda,
  SiAzuredevops,
  SiAzurepipelines,
  SiBitbucket,
  SiBootstrap,
  SiC,
  SiChai,
  SiCplusplus,
  SiCucumber,
  SiDjango,
  SiDocker,
  SiElastic,
  SiElasticsearch,
  SiExpress,
  SiFastapi,
  SiFastify,
  SiFlask,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGnubash,
  SiGooglecloud,
  SiGrafana,
  SiGraphql,
  SiInfluxdb,
  SiJavascript,
  SiJest,
  SiKubernetes,
  SiLinux,
  SiMaterialdesign,
  SiMongodb,
  SiMqtt,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNodered,
  SiPhp,
  SiPortainer,
  SiPostgresql,
  SiPython,
  SiRabbitmq,
  SiRancher,
  SiReact,
  SiRedis,
  SiSelenium,
  SiSymfony,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiWebrtc,
} from 'react-icons/si';

export interface TechnologyIcon {
  name: string;
  icon: JSX.Element;
}
export type { Category as TechnologyCategory };
export interface Technology extends TechnologyData {
  icon?: JSX.Element;
}

export const icons: TechnologyIcon[] = [
  {
    name: 'JavaScript',
    icon: <SiJavascript color="#fde047" />,
  },
  {
    name: 'Typescript',
    icon: <SiTypescript color="#4272BA" />,
  },
  {
    name: 'PHP',
    icon: <SiPhp color={'rgb(96,97,158)'} />,
  },
  {
    name: 'C',
    icon: <SiC color={'rgb()'} />,
  },
  {
    name: 'C++',
    icon: <SiCplusplus color="rgb(96,97,158)" />,
  },
  {
    name: 'Python',
    icon: <SiPython color="rgb(30,63,98)" />,
  },
  {
    name: 'Bash',
    icon: <SiGnubash color="rgb(27,33,39)" />,
  },
  {
    name: 'Arduino',
    icon: <SiArduino color="rgb(17,136,140)" />,
  },
  {
    name: 'React',
    icon: <SiReact color="#61dafb" />,
  },
  {
    name: 'Angular',
    icon: <SiAngular color={'rgb(180,0,36)'} />,
  },
  {
    name: 'Vue',
    icon: <SiVuedotjs color={'#42b883'} />,
  },
  {
    name: 'Symfony',
    icon: <SiSymfony color={'black'} />,
  },
  {
    name: 'Tailwindcss',
    icon: <SiTailwindcss color={'rgb(45,163,231)'} />,
  },
  {
    name: 'Ant Design',
    icon: <SiAntdesign color={''} />,
  },
  {
    name: 'MaterialUI',
    icon: <SiMaterialdesign color={''} />,
  },
  {
    name: 'Bootstrap',
    icon: <SiBootstrap color={''} />,
  },
  {
    name: 'Express',
    icon: <SiExpress color={''} />,
  },
  {
    name: 'Fastify',
    icon: <SiFastify color={''} />,
  },
  {
    name: 'NextJS',
    icon: <SiNextdotjs color={''} />,
  },
  {
    name: 'NestJS',
    icon: <SiNestjs color={''} />,
  },
  {
    name: 'FastAPI',
    icon: <SiFastapi color={'#fff'} />,
  },
  {
    name: 'Vite',
    icon: <SiVite color={''} />,
  },
  {
    name: 'Mysql',
    icon: <SiMysql color={''} />,
  },
  {
    name: 'Postgresql',
    icon: <SiPostgresql color={''} />,
  },
  {
    name: 'Mongodb',
    icon: <SiMongodb color={''} />,
  },
  {
    name: 'InfluxDB',
    icon: <SiInfluxdb color={''} />,
  },
  {
    name: 'GraphQL',
    icon: <SiGraphql color={''} />,
  },
  {
    name: 'Apache Cassandra',
    icon: <SiApachecassandra color={''} />,
  },
  {
    name: 'Docker',
    icon: <SiDocker color={''} />,
  },
  {
    name: 'Kubernetes',
    icon: <SiKubernetes color={''} />,
  },
  {
    name: 'Web RTC',
    icon: <SiWebrtc color={''} />,
  },
  {
    name: 'NGINX',
    icon: <SiNginx color={''} />,
  },
  {
    name: 'Gitlab pipelines',
    icon: <SiGitlab color={''} />,
  },
  {
    name: 'GitHub pipelines',
    icon: <SiGithub color={''} />,
  },
  {
    name: 'BitBucket pipelines',
    icon: <SiBitbucket color={''} />,
  },
  {
    name: 'Azure pipelines',
    icon: <SiAzurepipelines color={''} />,
  },
  {
    name: 'MQTT',
    icon: <SiMqtt color={''} />,
  },
  {
    name: 'RabbitMQ',
    icon: <SiRabbitmq color={''} />,
  },
  {
    name: 'Redis',
    icon: <SiRedis color={''} />,
  },
  {
    name: 'Grafana',
    icon: <SiGrafana color={''} />,
  },
  {
    name: 'Git',
    icon: <SiGit color={''} />,
  },
  {
    name: 'Elastic',
    icon: <SiElastic color={''} />,
  },
  {
    name: 'Elasticsearch',
    icon: <SiElasticsearch color={''} />,
  },
  {
    name: 'Django',
    icon: <SiDjango color={''} />,
  },
  {
    name: 'Flask',
    icon: <SiFlask color={''} />,
  },
  {
    name: 'Linux',
    icon: <SiLinux color={''} />,
  },
  {
    name: 'Jest',
    icon: <SiJest color={''} />,
  },
  {
    name: 'Chai',
    icon: <SiChai color={''} />,
  },
  {
    name: 'Cucumber',
    icon: <SiCucumber color={''} />,
  },
  {
    name: 'Asterisk',
    icon: <DiAsterisk color={''} />,
  },
  {
    name: 'Selenium',
    icon: <SiSelenium color={''} />,
  },
  {
    name: 'JMeter',
    icon: <SiApachejmeter color={''} />,
  },
  {
    name: 'Rancher',
    icon: <SiRancher />,
  },
  {
    name: 'Portainer',
    icon: <SiPortainer />,
  },
  {
    name: 'Node-RED',
    icon: <SiNodered />,
  },
  {
    name: 'NodeJS',
    icon: <SiNodedotjs />,
  },
  {
    name: 'AWS',
    icon: <SiAwslambda />,
  },
  {
    name: 'Azure',
    icon: <SiAzuredevops/>,
  },
  {
    name: 'GCP',
    icon: <SiGooglecloud/>,
  },
];

export const technologies: Technology[] = technologiesData.map(technology => ({
  ...technology,
  icon: icons.find(icon => icon.name === technology.name)?.icon,
}));

export default technologies;
