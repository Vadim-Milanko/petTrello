import React, { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

import { useCustomDispatch } from '../../../../hooks/useCustomDispatch';
import { deleteBoard } from '../../../../store/sideEffects/board';

import './style.scss';

interface IProps {
  id?: string;
  boardId: string;
  title: string;
  openPopover: (event: MouseEvent<HTMLDivElement>, id: string) => void;
  setIsEdit: (status: boolean) => void;
}

function BoardCard(props: IProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useCustomDispatch();

  const {
    title = '', boardId, openPopover, id = '', setIsEdit,
  } = props;

  const deleteBoardCard = (event: MouseEvent<SVGSVGElement>) => {
    dispatch(deleteBoard(boardId));
    event.stopPropagation();
  };

  const handleEditClick = (event: MouseEvent<HTMLDivElement>) => {
    setIsEdit(true);
    openPopover(event, boardId);
    event.stopPropagation();
  };

  const onBoardClick = () => {
    navigate('/todos');
  };

  return (
    <div className="boardCard" onClick={onBoardClick}>
      <p className="boardCard__title">{title}</p>
      <div className="boardCard__icons">
        <DeleteOutlineIcon className="boardIcon" onClick={deleteBoardCard} />
        <div id={id} onClick={handleEditClick}>
          <DragIndicatorIcon className="boardIcon" />
        </div>
      </div>
    </div>
  );
}

export default BoardCard;
