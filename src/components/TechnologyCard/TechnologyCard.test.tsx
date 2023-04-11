import { fireEvent, render } from '@testing-library/react';
import SkillCard from '../TechnologyCard';

const technology = {
  name: 'Test Skill',
  familiarity: 3,
  preference: 4,
};

describe('TechnologyCard component', () => {
  it('should render the front card with the provided icon', () => {
    const icon = <span>Test Icon</span>;
    const { getByText } = render(
      <SkillCard icon={icon} technology={technology} />
    );
    expect(getByText('Test Icon')).toBeInTheDocument();
  });

  it('should flip to the back card on click', () => {
    const { getByText } = render(
      <SkillCard icon={<span>Test Icon</span>} technology={technology} />
    );
    fireEvent.click(getByText('Test Icon'));
    expect(getByText('Test Skill')).toBeInTheDocument();
  });

  it('should render the technology name and ratings on the back card', () => {
    const { getByText } = render(
      <SkillCard icon={<span>Test Icon</span>} technology={technology} />
    );
    fireEvent.click(getByText('Test Icon'));
    expect(getByText('Test Skill')).toBeInTheDocument();
    expect(getByText('Familiarity')).toBeInTheDocument();
    expect(getByText('Preference')).toBeInTheDocument();
  });
});
