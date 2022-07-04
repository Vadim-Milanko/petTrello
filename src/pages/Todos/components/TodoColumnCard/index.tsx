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
import { deleteTodoColumn, editBoardTitle } from '../../../../store/sideEffects/todoColumn';
import { addTodoItem } from '../../../../store/sideEffects/todoItem';
import { useCustomDispatch } from '../../../../hooks/useCustomDispatch';
import { ITodoItem } from '../../../../store/initialStore';

import './style.scss';
import TodoItem from '../TodoItem';

interface IProps {
  todoColumnId: string;
  todoTitle: string;
  todoItems: ITodoItem[];
}

function TodoColumnCard(props: IProps): JSX.Element {
  const { todoTitle, todoColumnId, todoItems } = props;

  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const [isTitleChanging, setIsTitleChanging] = useState<boolean>(false);
  const [title, setTitle] = useState<ITodoTitleData>({ title: todoTitle });
  const dispatch = useCustomDispatch();
  const params = useParams();

  const handleDeleteTodoColumn = () => {
    dispatch(deleteTodoColumn(todoColumnId));
  };

  const onOpenForm = () => {
    setIsButtonClicked(true);
  };

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle({
      title: event.target.value,
    });
  };

  const handleChangeColumnTitle = () => {
    dispatch(editBoardTitle(title, params.id as string));
    setIsTitleChanging(true);
  };

  const handleCancelTitleChanging = (event: MouseEvent<SVGSVGElement>) => {
    setIsTitleChanging(false);
    setTitle({ title: todoTitle });
    event.stopPropagation();
  };

  const handleSaveTitleChanging = (event: MouseEvent<SVGSVGElement>) => {
    setIsTitleChanging(false);
    event.stopPropagation();
  };

  const handleAddTodoList = (todoItemTitle: ITodoTitleData) => {
    dispatch(addTodoItem(todoItemTitle, params.id as string));
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
              value={title.title}
              autoFocus
              endAdornment={(
                <div className="editSettings">
                  <CheckIcon className="editIcons" onClick={handleSaveTitleChanging} />
                  <CloseIcon className="editIcons" onClick={handleCancelTitleChanging} />
                </div>
              )}
            />
          ) : (
            <div className="todoColumnCard__title" onClick={handleChangeColumnTitle}>
              {title.title}
            </div>
          )
        }
        {
          todoItems.map((item) => (
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
              onClick={onOpenForm}
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
