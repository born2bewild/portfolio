import TechnologyCard from '@/components/TechnologyCard';
import technologies, {
  Technology,
  TechnologyCategory,
} from '@/components/TechnologyIcons';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useMemo, useState } from 'react';
import { styled } from 'twin.macro';
import Filters from './Filters';
import { Icon } from './Icon';

const Container = styled(motion.div)`
  margin: 5rem 2rem 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
`;

export const Skills = () => {
  const [technologyFilter, setTechnologyFilter] = useState<
    TechnologyCategory | 'all'
  >('all');

  const filteredTechnologies = useMemo(() => {
    if (technologyFilter === 'all')
      return technologies.sort(() => 0.5 - Math.random()).slice(0, 24);
    return technologies.filter((skill: Technology) =>
      skill.category.includes(technologyFilter)
    );
  }, [technologyFilter]);

  return (
    <>
      <Filters setFilter={setTechnologyFilter} filter={technologyFilter} />
      <Container layout>
        <AnimatePresence>
          {filteredTechnologies.map(technology => (
            <motion.div
              layout
              key={technology.name}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TechnologyCard
                icon={<Icon technology={technology} />}
                technology={technology}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </Container>
    </>
  );
};

Skills.whyDidYouRender = true;

export default React.memo(Skills);
