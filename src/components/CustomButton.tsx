import React, { MouseEvent } from 'react';

export type buttonType = 'submit' | 'button' | 'reset' | undefined;

interface IProps {
  buttonClassName: string;
  isDisabled: boolean;
  text: string;
  type: buttonType;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const defaultProps = {
  onClick: () => {},
};

function CustomButton(props: IProps & typeof defaultProps): JSX.Element {
  const {
    buttonClassName,
    isDisabled,
    text,
    type,
    onClick,
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

CustomButton.defaultProps = defaultProps;

export default CustomButton;
