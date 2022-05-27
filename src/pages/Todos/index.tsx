import React, { MouseEvent, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Popover } from '@material-ui/core';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

import { useCustomDispatch } from '../../hooks/useCustomDispatch';
import { useCustomSelector } from '../../hooks/useCustomSelector';
import { deleteTodoColumn, getTodoColumns } from '../../store/sideEffects/todos';
import TodoColumnCard from './components/TodoColumnCard';
import AddTodoForm from './components/AddTodoForm';

import './style.scss';

export interface ITodoColumnData {
  title: string;
}

const ButtonClassNames = {
  root: 'addColumnBtn',
};

export const InputClassNames = {
  root: 'addInput',
};

function Todos(): JSX.Element {
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const [currentColumnId, setCurrentColumnId] = useState<string>('');
  const todos = useCustomSelector((store) => store.todos);
  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(getTodoColumns());
  }, []);

  const onOpenForm = () => {
    setIsButtonClicked(true);
  };

  const openPopover = (event: MouseEvent<HTMLDivElement>, id?: string) => {
    setAnchorEl(event.currentTarget);

    if (id) {
      setCurrentColumnId(id);
    }
  };

  const closePopover = () => {
    setAnchorEl(null);
  };

  const handleDeleteTodoColumn = () => {
    dispatch(deleteTodoColumn(currentColumnId));
    closePopover();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'popover' : undefined;

  return (
    <div className="todos">
      <section className="todos__workspace">
        {
          todos.map((todo) => (
            <TodoColumnCard
              id={id}
              todoColumnId={todo.id}
              key={todo.id}
              todoTitle={todo.title}
              openPopover={openPopover}
            />
          ))
         }
        {
          isButtonClicked ? (
            <AddTodoForm
              setIsButtonClicked={setIsButtonClicked}
              buttonLabel="add column"
              placeholder="Enter column title"
            />
          ) : (
            <Button
              classes={ButtonClassNames}
              onClick={onOpenForm}
            >
              <AddIcon />
              <div className="addColumnBtn__title">Add another column</div>
            </Button>
          )
        }

        <Popover
          id={id}
          open={open}
          onClose={closePopover}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <DeleteSweepIcon onClick={handleDeleteTodoColumn} />
        </Popover>
      </section>
    </div>
  );
}

export default Todos;
