import React, { MouseEvent } from 'react';

import './style.scss';

interface IProps {
  id?: string;
  handleClick: (event: MouseEvent<HTMLDivElement>) => void;
}

function CreateCard(props: IProps): JSX.Element {
  const {
    handleClick, id,
  } = props;

  return (
    <div className="createCard" id={id} onClick={handleClick}>
      <p>Create Board</p>
    </div>
  );
}

export default CreateCard;
