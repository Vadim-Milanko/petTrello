import React, { MouseEvent } from 'react';

type buttonType = 'submit' | 'button' | 'reset' | 'menu';

interface IProps {
  buttonClassName: string;
  isDisabled: boolean;
  text: string;
  type: buttonType;
  onClick?: (event: MouseEvent<HTMLButtonElement> | undefined) => void;
}

function CustomButton(props: IProps): JSX.Element {
  const {
    buttonClassName, isDisabled, text, type = 'submit', onClick = () => {},
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
