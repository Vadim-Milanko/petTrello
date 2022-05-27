import React from 'react';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { InputClassNames } from '../../index';

import './style.scss';

interface IProps {
  todoTitle: string;
}

function TodoColumnCard(props: IProps): JSX.Element {
  const { todoTitle } = props;

  return (
    <div className="todoColumnCard">
      {todoTitle}
      <OutlinedInput
        id="outlined-basic"
        classes={InputClassNames}
      />
      <Button
        className="addTodoBtn"
      >
        <AddIcon />
        <div className="addTodoBtn__title">Add Card</div>
      </Button>
    </div>
  );
}

export default TodoColumnCard;
