import React, { ChangeEvent, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';

import { InputClassNames, ITodoColumnData } from '../../index';
import { useCustomDispatch } from '../../../../hooks/useCustomDispatch';
import { addTodoColumn } from '../../../../store/sideEffects/todos';

import './style.scss';

interface IProps {
  setIsButtonClicked: (status: boolean) => void;
  buttonLabel: string;
  placeholder: string;
}

const ButtonClassNames = {
  root: 'addColumnBtn',
};

const initialColumnTitle = {
  title: '',
};

function TodoColumnCard(props: IProps): JSX.Element {
  const [columnTitle, setColumnTitle] = useState<ITodoColumnData>(initialColumnTitle);
  const dispatch = useCustomDispatch();

  const { setIsButtonClicked, buttonLabel, placeholder } = props;

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

  const onCloseForm = () => {
    setIsButtonClicked(false);
  };

  return (
    <div className="addColumnWrap">
      <OutlinedInput
        id="outlined-basic"
        placeholder={placeholder}
        classes={InputClassNames}
        onChange={handleInputChange}
        value={columnTitle.title}
      />
      <div className="addColumnBtnWrap">
        <Button classes={ButtonClassNames} onClick={handleAddColumn}>{buttonLabel}</Button>
        <CloseIcon className="addIcon" onClick={onCloseForm} />
      </div>
    </div>
  );
}

export default TodoColumnCard;
