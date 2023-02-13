import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { useParams } from 'react-router';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import { InputClassNames, ITodoTitleData } from '../../index';
import AddTodoForm from '../AddTodoForm';
import TodoItem from '../TodoItem';
import { deleteTodoColumn, editTodoColumnTitle } from '../../../../store/sideEffects/todoColumn';
import { addTodoItem } from '../../../../store/sideEffects/todoItem';
import { useCustomDispatch } from '../../../../hooks/useCustomDispatch';
import { useCustomSelector } from '../../../../hooks/useCustomSelector';
import { ITodoItem } from '../../../../store/initialStore';

import './style.scss';

interface IProps {
  todoColumnId: string;
  todoColumnTitle: string;
}

function TodoColumnCard(props: IProps): JSX.Element {
  const { todoColumnTitle, todoColumnId } = props;

  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isTitleChanging, setIsTitleChanging] = useState(false);
  const [columnCardTitle, setColumnCardTitle] = useState(todoColumnTitle);
  const todoItems = useCustomSelector<ITodoItem[]>((store) => store.todoItem);
  const dispatch = useCustomDispatch();
  const params = useParams();

  const currentTodoItems = todoItems.filter((item) => item.columnId === +todoColumnId);

  const handleDeleteTodoColumn = () => {
    dispatch(deleteTodoColumn(todoColumnId));
  };

  const handleOpenForm = () => {
    setIsButtonClicked(true);
  };

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setColumnCardTitle(event.target.value);
  };

  const handleTitleChanging = () => {
    setIsTitleChanging(true);
  };

  const handleCancelTitleChanging = (event: MouseEvent<SVGSVGElement>) => {
    setIsTitleChanging(false);
    setColumnCardTitle(todoColumnTitle);
    event.stopPropagation();
  };

  const handleSaveTitleChanging = (event: MouseEvent<SVGSVGElement>) => {
    setIsTitleChanging(false);
    dispatch(editTodoColumnTitle(columnCardTitle, todoColumnId));
    event.stopPropagation();
  };

  const handleAddTodoList = (todoItemTitle: ITodoTitleData) => {
    dispatch(addTodoItem({ ...todoItemTitle, columnId: todoColumnId }, params.id as string));
  };

  return (
    <div className="todoColumnCardWrap">
      <div className="todoColumnCard">
        {
          isTitleChanging ? (
            <OutlinedInput
              id="outlined-basic"
              classes={InputClassNames}
              onChange={handleChangeTitle}
              value={columnCardTitle}
              autoFocus
              endAdornment={(
                <div className="editSettings">
                  <CheckIcon className="editIcons" onClick={handleSaveTitleChanging} />
                  <CloseIcon className="editIcons" onClick={handleCancelTitleChanging} />
                </div>
              )}
            />
          ) : (
            <div className="todoColumnCard__title" onClick={handleTitleChanging}>
              {columnCardTitle}
            </div>
          )
        }
        {
          currentTodoItems.map((item) => (
            <TodoItem key={item.id} todoItem={item} />
          ))
        }
        {
          isButtonClicked ? (
            <AddTodoForm
              setIsButtonClicked={setIsButtonClicked}
              buttonLabel="add todo title"
              placeholder="Enter todo title"
              handleAdd={handleAddTodoList}
            />
          ) : (
            <Button
              className="addTodoBtn"
              onClick={handleOpenForm}
            >
              <AddIcon />
              <div className="addTodoBtn__title">Add todo</div>
            </Button>
          )
        }
      </div>
      <DeleteSweepIcon className="deleteIcon" onClick={handleDeleteTodoColumn} />
    </div>
  );
}

export default TodoColumnCard;
