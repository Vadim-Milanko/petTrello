import React, { ChangeEvent, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import { useCustomDispatch } from '../../hooks/useCustomDispatch';
import { useCustomSelector } from '../../hooks/useCustomSelector';
import { addTodoColumn, getTodoColumns } from '../../store/sideEffects/todos';
import TodoColumnCard from './components/TodoColumnCard';

import './style.scss';

export interface ITodoColumnData {
  title: string;
}

const initialColumnTitle = {
  title: '',
};

const ButtonClassNames = {
  root: 'addColumnBtn',
};

export const InputClassNames = {
  root: 'addInput',
};

function Todos(): JSX.Element {
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const [columnTitle, setColumnTitle] = useState<ITodoColumnData>(initialColumnTitle);
  const todos = useCustomSelector((store) => store.todos);
  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(getTodoColumns());
  }, []);

  const onOpenForm = () => {
    setIsButtonClicked(true);
  };

  const onCloseForm = () => {
    setIsButtonClicked(false);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setColumnTitle({
      title: event.target.value,
    });
  };

  const handleAddColumn = () => {
    if (columnTitle.title.length === 0) return;

    dispatch(addTodoColumn(columnTitle));
    setColumnTitle(initialColumnTitle);
  };

  return (
    <div className="todos">
      <section className="todos__workspace">
        {
          todos.map((todo) => (
            <TodoColumnCard
              key={todo.id}
              todoTitle={todo.title}
            />
          ))
         }
        {
          isButtonClicked ? (
            <div className="addColumnWrap">
              <OutlinedInput
                id="outlined-basic"
                placeholder="Enter list title"
                classes={InputClassNames}
                onChange={handleInputChange}
                value={columnTitle.title}
              />
              <div className="addColumnBtnWrap">
                <Button classes={ButtonClassNames} onClick={handleAddColumn}>Add Column</Button>
                <CloseIcon className="addIcon" onClick={onCloseForm} />
              </div>
            </div>
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

      </section>
    </div>
  );
}

export default Todos;
