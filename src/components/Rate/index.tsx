import Tooltip from '@/components/Tooltip';
import 'twin.macro';
import Star from './Star';

type Props = {
  value: number;
};

export const Rate = ({ value }: Props) => {
  const stars = [];
  const rating = Math.round(value);
  for (let i = 1; i <= 5; i++) {
    stars.push(<Star key={`star-${i}`} isFilled={i <= rating} />);
  }
  return (
    <Tooltip message={<p>Evaluation: {value.toPrecision(3)}</p>}>
      <div tw="flex relative items-center">{stars}</div>
    </Tooltip>
  );
};

export default Rate;
