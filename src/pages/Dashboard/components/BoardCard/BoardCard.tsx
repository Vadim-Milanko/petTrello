import React from 'react';

import './style.scss';

interface IProps {
  title: string;
}

function BoardCard(props: IProps): JSX.Element {
  const { title = '' } = props;

  return (
    <div className="boardCard">
      <p className="boardCard__title">{title}</p>
    </div>
  );
}

export default BoardCard;
