import tw from 'twin.macro';

const Circle = tw.div`h-2.5 w-2.5 bg-current rounded-full`;

const Loader = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => (
  <div tw="flex mt-2" {...props}>
    <Circle tw="mr-1 animate-bounce"></Circle>
    <Circle tw="mr-1 animate-bounce-200"></Circle>
    <Circle tw="animate-bounce-400"></Circle>
  </div>
);

export default Loader;
