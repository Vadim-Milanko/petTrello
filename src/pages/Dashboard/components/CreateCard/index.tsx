import React, { MouseEvent } from 'react';

import './style.scss';

interface IProps {
  id?: string;
  openPopover: (event: MouseEvent<HTMLDivElement>) => void;
  setIsEdit: (status: boolean) => void;
}

function CreateCard(props: IProps): JSX.Element {
  const {
    openPopover, id, setIsEdit,
  } = props;

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setIsEdit(false);
    openPopover(event);
  };

  return (
    <div className="createCard" id={id} onClick={handleClick}>
      <p>Create Board</p>
    </div>
  );
}

export default CreateCard;
