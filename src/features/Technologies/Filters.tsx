import Button from '@/components/Button';
import { Category } from '@/data/technologies';
import tw from 'twin.macro';

const Container = tw.div`flex flex-wrap`;

const GroupButtonFirst = tw(Button)`rounded-l-lg`;
const GroupButtonMiddle = tw(Button)``;
const GroupButtonLast = tw(Button)`rounded-r-lg`;

type Props = {
  setFilter: (value: Category | 'all') => void;
  filter: Category | 'all';
};

export const Filters = ({ setFilter, filter }: Props) => (
  <Container role="group">
    <GroupButtonFirst
      isActive={filter === 'all'}
      type="button"
      onClick={() => {
        setFilter('all');
      }}
    >
      Random
    </GroupButtonFirst>
    <GroupButtonMiddle
      isActive={filter === 'frontend'}
      type="button"
      onClick={() => {
        setFilter('frontend');
      }}
    >
      Frontend
    </GroupButtonMiddle>
    <GroupButtonMiddle
      isActive={filter === 'backend'}
      type="button"
      onClick={() => {
        setFilter('backend');
      }}
    >
      Backend
    </GroupButtonMiddle>
    <GroupButtonMiddle
      isActive={filter === 'testing'}
      type="button"
      onClick={() => {
        setFilter('testing');
      }}
    >
      Testing
    </GroupButtonMiddle>
    <GroupButtonMiddle
      isActive={filter === 'devops'}
      type="button"
      onClick={() => {
        setFilter('devops');
      }}
    >
      DevOps
    </GroupButtonMiddle>
    <GroupButtonLast
      isActive={filter === 'iot'}
      type="button"
      onClick={() => {
        setFilter('iot');
      }}
    >
      IoT
    </GroupButtonLast>
  </Container>
);

Filters.WhyDidYouRender = true;

export default Filters;
