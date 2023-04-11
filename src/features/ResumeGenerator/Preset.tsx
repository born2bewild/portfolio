import Button from '@/components/Button';
import { Category } from '@/data/technologies';
import tw from 'twin.macro';

const Container = tw.div`flex flex-wrap`;

const GroupButtonFirst = tw(Button)`rounded-l-lg`;
const GroupButtonMiddle = tw(Button)``;
const GroupButtonLast = tw(Button)`rounded-r-lg`;

type Props = {
  onChange: (value: Category | 'all') => void;
  preset: Category | 'all';
};

export const Preset = ({ onChange, preset }: Props) => (
  <Container role="group">
    <GroupButtonFirst
      isActive={preset === 'all'}
      type="button"
      onClick={() => {
        onChange('all');
      }}
    >
      All
    </GroupButtonFirst>
    <GroupButtonMiddle
      isActive={preset === 'frontend'}
      type="button"
      onClick={() => {
        onChange('frontend');
      }}
    >
      Frontend
    </GroupButtonMiddle>
    <GroupButtonMiddle
      isActive={preset === 'backend'}
      type="button"
      onClick={() => {
        onChange('backend');
      }}
    >
      Backend
    </GroupButtonMiddle>
    <GroupButtonMiddle
      isActive={preset === 'testing'}
      type="button"
      onClick={() => {
        onChange('testing');
      }}
    >
      Testing
    </GroupButtonMiddle>
    <GroupButtonMiddle
      isActive={preset === 'devops'}
      type="button"
      onClick={() => {
        onChange('devops');
      }}
    >
      DevOps
    </GroupButtonMiddle>
    <GroupButtonLast
      isActive={preset === 'iot'}
      type="button"
      onClick={() => {
        onChange('iot');
      }}
    >
      IoT
    </GroupButtonLast>
  </Container>
);

Preset.WhyDidYouRender = true;

export default Preset;
