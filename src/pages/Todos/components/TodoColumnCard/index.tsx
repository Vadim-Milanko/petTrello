import React, { MouseEvent, useState } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

import { InputClassNames } from '../../index';
import AddTodoForm from '../AddTodoForm';

import './style.scss';

interface IProps {
  id?: string;
  todoColumnId: string;
  openPopover: (event: MouseEvent<HTMLDivElement>, id?: string) => void
  todoTitle: string;
}

function TodoColumnCard(props: IProps): JSX.Element {
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const {
    todoTitle, id, openPopover, todoColumnId,
  } = props;

  const onOpenForm = () => {
    setIsButtonClicked(true);
  };

  const handleSettingsClick = (event: MouseEvent<HTMLDivElement>) => {
    openPopover(event, todoColumnId);
  };

  return (
    <div className="todoColumnCardWrap">
      <div className="todoColumnCard">
        <span className="todoColumnCard__title">{todoTitle}</span>
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
      <div id={id} onClick={handleSettingsClick}>
        <MoreVertIcon className="settingsIcon" />
      </div>
    </div>
  );
}

export default TodoColumnCard;
