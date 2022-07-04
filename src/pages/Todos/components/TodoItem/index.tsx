import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Create';

import { deleteTodoItem } from '../../../../store/sideEffects/todoItem';
import { useCustomDispatch } from '../../../../hooks/useCustomDispatch';
import { ITodoItem } from '../../../../store/initialStore';

import './style.scss';

interface IProps {
  todoItem: ITodoItem;
}

function TodoColumnCard(props: IProps): JSX.Element {
  const { todoItem: { id, title } } = props;
  const dispatch = useCustomDispatch();

  const handleDeleteTodoItem = () => {
    dispatch(deleteTodoItem(id));
  };

  return (
    <div className="todoItemWrap">
      <div className="todoItem">{title}</div>

      <div className="todoItemIconsWrap">
        <EditIcon fontSize="small" className="todoItemIcon" />
      </div>
      <HighlightOffIcon
        fontSize="small"
        className="todoItemDeleteIcon"
        onClick={handleDeleteTodoItem}
      />
    </div>
  );
}

export default TodoColumnCard;
