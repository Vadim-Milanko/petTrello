import React, { useState } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

import { InputClassNames } from '../../index';
import AddTodoForm from '../AddTodoForm';
import { deleteTodoColumn } from '../../../../store/sideEffects/todos';
import { useCustomDispatch } from '../../../../hooks/useCustomDispatch';

import './style.scss';

interface IProps {
  todoColumnId: string;
  todoTitle: string;
}

function TodoColumnCard(props: IProps): JSX.Element {
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const dispatch = useCustomDispatch();
  const {
    todoTitle, todoColumnId,
  } = props;

  const handleDeleteTodoColumn = () => {
    dispatch(deleteTodoColumn(todoColumnId));
  };

  const onOpenForm = () => {
    setIsButtonClicked(true);
  };

  return (
    <div className="todoColumnCardWrap">
      <div className="todoColumnCard">
        <div className="todoColumnCard__title">{todoTitle}</div>
        <OutlinedInput
          id="outlined-basic"
          classes={InputClassNames}
        />
        {
          isButtonClicked ? (
            <AddTodoForm
              setIsButtonClicked={setIsButtonClicked}
              buttonLabel="add todo"
              placeholder="Enter todo title"
            />
          ) : (
            <Button
              className="addTodoBtn"
              onClick={onOpenForm}
            >
              <AddIcon />
              <div className="addTodoBtn__title">Add Card</div>
            </Button>
          )
        }

      </div>
      <DeleteSweepIcon className="deleteIcon" onClick={handleDeleteTodoColumn} />
    </div>
  );
}

export default TodoColumnCard;
