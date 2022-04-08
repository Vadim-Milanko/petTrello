import React, { MouseEvent } from 'react';

export type buttonType = 'submit' | 'button' | 'reset' | undefined;

interface IProps {
  className: string;
  isDisabled: boolean;
  text: string;
  type: buttonType;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function CustomButton(props: IProps): JSX.Element {
  const {
    className,
    isDisabled,
    text,
    type,
    onClick = () => {},
  } = props;

  return (
    <button
      className={className}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default CustomButton;
