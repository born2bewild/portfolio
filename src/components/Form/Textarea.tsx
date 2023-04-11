import React from 'react';
import tw, { styled } from 'twin.macro';

export const TextareaField = styled.textarea(
  ({ disabled }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => [
    tw`mt-0 block bg-white w-full px-0.5 border-0 border-b border-gray-200 focus:ring-0 focus:border-black`,
    disabled && tw`bg-gray-200 dark:(bg-gray-400 border-gray-500)`,
  ]
);

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  disabled?: boolean;
}

export const Textarea = ({ disabled = false, label, ...restProps }: Props) => {
  if (!label) {
    return <TextareaField disabled={disabled} {...restProps} />;
  }

  return (
    <label tw="block">
      <span tw="text-gray-700 dark:text-gray-200">{label}</span>
      <TextareaField disabled={disabled} {...restProps} />
    </label>
  );
};

export default React.memo(Textarea);
