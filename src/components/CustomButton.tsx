import React, { MouseEvent } from 'react';

export type buttonType = 'submit' | 'button' | 'reset' | undefined;

interface IProps {
  buttonClassName: string;
  isDisabled: boolean;
  text: string;
  type: buttonType;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function CustomButton(props: IProps): JSX.Element {
  const {
    buttonClassName,
    isDisabled,
    text,
    type,
    onClick = () => {},
  } = props;

  return (
    <button
      className={buttonClassName}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default CustomButton;
