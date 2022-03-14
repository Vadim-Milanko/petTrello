import React from 'react';

interface IProps {
  className: string;
  isDisabled: boolean;
  text: string;
}

function CustomButton(props: IProps): JSX.Element {
  const { className, isDisabled, text } = props;

  return (
    <button
      className={className}
      type="submit"
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}

export default CustomButton;
