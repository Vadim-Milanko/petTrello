import React, { ChangeEvent, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';

import { InputClassNames, ITodoColumnData } from '../../index';

import './style.scss';

interface IProps {
  setIsButtonClicked: (status: boolean) => void;
  buttonLabel: string;
  placeholder: string;
  handleAdd: (title: ITodoColumnData) => void;
}

const ButtonClassNames = {
  root: 'addColumnBtn',
};

const initialColumnTitle = {
  title: '',
};

function TodoColumnCard(props: IProps): JSX.Element {
  const {
    setIsButtonClicked,
    buttonLabel,
    placeholder,
    handleAdd,
  } = props;

  const [columnTitle, setColumnTitle] = useState<ITodoColumnData>(initialColumnTitle);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setColumnTitle({
      title: event.target.value,
    });
  };

  const handleAddColumn = () => {
    if (columnTitle.title.length === 0) return;

    handleAdd(columnTitle);
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
        autoFocus
      />
      <div className="addColumnBtnWrap">
        <Button classes={ButtonClassNames} onClick={handleAddColumn}>{buttonLabel}</Button>
        <CloseIcon className="addIcon" onClick={onCloseForm} />
      </div>
    </div>
  );
}

export default TodoColumnCard;
