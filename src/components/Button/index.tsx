import Loader from '@/components/Loader';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import tw, { styled } from 'twin.macro';

type ButtonProps = {
  isActive?: boolean;
  disabled?: boolean;
};

const StyledButton = styled.button(({ isActive, disabled }: ButtonProps) => [
  tw`flex px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-2 focus:z-10 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white`,
  isActive &&
    tw`z-10 text-blue-700 ring-2 ring-blue-700 dark:ring-blue-500 dark:text-white`,
  disabled && tw`bg-gray-300 hover:bg-gray-200`,
]);

interface Props
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'ref'
  > {
  loading?: boolean;
}

const Button = ({ loading, children, ...restProps }: Props) => (
  <StyledButton disabled={loading} {...restProps}>
    {loading && <Loader tw="pr-2" />}
    {children}
  </StyledButton>
);

export default Button;
