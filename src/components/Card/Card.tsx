import React, { MouseEvent } from 'react';

import './style.scss';

interface IProps {
  cardClassName: string;
  id?: string | undefined;
  handleClick: (event: MouseEvent<HTMLDivElement>) => void;
  title: string;
}

function Card(props: IProps): JSX.Element {
  const {
    cardClassName, handleClick, id, title,
  } = props;

  return (
    <div className={cardClassName} id={id} onClick={handleClick}>
      <p>{title}</p>
    </div>
  );
}

export default Card;
