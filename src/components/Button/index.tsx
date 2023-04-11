import tw, { styled } from 'twin.macro';
type Props = {
  isActive?: boolean;
};

const Button = styled.button(({ isActive }: Props) => [
  tw`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-2 focus:z-10 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white`,
  isActive &&
    tw`z-10 text-blue-700 ring-2 ring-blue-700 dark:ring-blue-500 dark:text-white`,
]);

export default Button;
