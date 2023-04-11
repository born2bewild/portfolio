import { Project as IProject } from '@/data/projects';
import Image from 'next/image';
import { FaQuestion } from 'react-icons/fa';
import 'twin.macro';
import { Technology } from './Technology';

type Props = {
  project: IProject;
};

export const Project = ({ project }: Props) => {
  return (
    <div tw="lg:w-1/3 lg:mb-0 mb-6 p-4" key={project.name}>
      <div tw="h-full text-center">
        {project.logo ? (
          <Image
            width={300}
            height={300}
            src={project.logo}
            alt={project.name}
            tw="w-20 h-20 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
          />
        ) : (
          <FaQuestion
            width={300}
            height={300}
            tw="w-20 h-20 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 text-black"
          />
        )}
        <h2 tw="text-gray-900 dark:text-white font-semibold tracking-wider text-xl">
          {project.url ? (
            <a tw="hover:text-blue-600 " href={project.url} target="_blank">
              {project.name}
            </a>
          ) : (
            project.name
          )}
        </h2>
        <span tw="inline-block h-1 w-10 rounded bg-indigo-500 mt-2 mb-1"></span>
        <p tw="text-xs mb-2 ">{project.description}</p>
        <div tw="flex flex-wrap relative my-auto justify-center">
          {project.technologies.map(tech => (
            <Technology
              key={`project-${project.name}-tech-${tech.name}`}
              technology={tech}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
