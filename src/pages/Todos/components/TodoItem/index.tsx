import React, { ChangeEvent, MouseEvent, useState } from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Create';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

import { deleteTodoItem, editTodoItemTitle } from '../../../../store/sideEffects/todoItem';
import { useCustomDispatch } from '../../../../hooks/useCustomDispatch';
import { ITodoItem } from '../../../../store/initialStore';

import './style.scss';

export const InputClassNames = {
  input: 'todoItemInput',
};

interface IProps {
  todoItem: ITodoItem;
}

function TodoItem(props: IProps): JSX.Element {
  const { todoItem: { id, title } } = props;
  const [isTitleChanging, setIsTitleChanging] = useState(false);
  const [todoItemTitle, setTodoItemTitle] = useState(title);
  const dispatch = useCustomDispatch();

  const handleDeleteTodoItem = () => {
    dispatch(deleteTodoItem(id));
  };

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoItemTitle(event.target.value);
  };

  const handleTitleChanging = () => {
    setIsTitleChanging(true);
  };

  const handleCancelTitleChanging = (event: MouseEvent<SVGSVGElement>) => {
    setIsTitleChanging(false);
    setTodoItemTitle(title);
    event.stopPropagation();
  };

  const handleSaveTitleChanging = (event: MouseEvent<SVGSVGElement>) => {
    setIsTitleChanging(false);
    dispatch(editTodoItemTitle(todoItemTitle, id));
    event.stopPropagation();
  };

  return (
    <div className="todoItemWrap">
      {
        isTitleChanging ? (
          <OutlinedInput
            id="outlined-basic"
            classes={InputClassNames}
            onChange={handleChangeTitle}
            value={todoItemTitle}
            autoFocus
            endAdornment={(
              <div className="editSettings">
                <CheckIcon className="editIcons" onClick={handleSaveTitleChanging} />
                <CloseIcon className="editIcons" onClick={handleCancelTitleChanging} />
              </div>
            )}
          />
        ) : (
          <div className="todoItem">{title}</div>
        )
      }
      <div className="todoItemIconsWrap">
        {
          !isTitleChanging
          && <EditIcon fontSize="small" className="todoItemIcon" onClick={handleTitleChanging} />
        }
      </div>
      <HighlightOffIcon
        fontSize="small"
        className="todoItemDeleteIcon"
        onClick={handleDeleteTodoItem}
      />
    </div>
  );
}

export default TodoItem;
