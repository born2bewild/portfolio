import React from 'react';
import tw, { styled } from 'twin.macro';

export const InputField = styled.input(
  ({ disabled }: React.InputHTMLAttributes<HTMLInputElement>) => [
    tw`mt-0 block bg-white w-full px-0.5 border-0 border-b border-gray-200 focus:ring-0 focus:border-black`,
    disabled && tw`bg-gray-200 dark:(bg-gray-400 border-gray-500)`,
  ]
);

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
}

export const Input = ({ disabled = false, label, ...restProps }: Props) => {
  if (!label) {
    return <InputField disabled={disabled} {...restProps} />;
  }

  return (
    <label tw="block">
      <span tw="text-gray-700 dark:text-gray-200">{label}</span>
      <InputField disabled={disabled} {...restProps} />
    </label>
  );
};

export default React.memo(Input);
