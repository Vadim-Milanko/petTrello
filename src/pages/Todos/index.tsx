import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import { useCustomDispatch } from '../../hooks/useCustomDispatch';
import { useCustomSelector } from '../../hooks/useCustomSelector';
import { addTodoColumn, getTodoColumns } from '../../store/sideEffects/todos';
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
  input: 'inputHelp',
};

function Todos(): JSX.Element {
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const todos = useCustomSelector((store) => store.todos);
  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(getTodoColumns());
  }, []);

  const onOpenForm = () => {
    setIsButtonClicked(true);
  };

  const handleAddTodoColumn = (columnTitle: ITodoColumnData) => {
    dispatch(addTodoColumn(columnTitle));
  };

  return (
    <div className="todos">
      <section className="todos__workspace">
        {
          todos.map((todo) => (
            <TodoColumnCard
              todoColumnId={todo.id}
              key={todo.id}
              todoTitle={todo.title}
            />
          ))
         }
        {
          isButtonClicked ? (
            <AddTodoForm
              setIsButtonClicked={setIsButtonClicked}
              buttonLabel="add column"
              placeholder="Enter column title"
              handleAdd={handleAddTodoColumn}
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
      </section>
    </div>
  );
}

export default Todos;
