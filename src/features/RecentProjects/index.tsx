import projects from '@/data/projects';
import 'twin.macro';
import Project from './Project';

export const RecentProjects = () => {
  return (
    <div tw="container px-5 py-12 mx-auto">
      <div tw="flex flex-wrap -m-4">
        {projects.map(project => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
