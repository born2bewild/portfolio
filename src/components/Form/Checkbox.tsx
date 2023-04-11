import tw, { styled } from 'twin.macro';

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})(() => [tw`border-2 border-gray-300 focus:border-gray-300 focus:ring-black`]);

export default Checkbox;
