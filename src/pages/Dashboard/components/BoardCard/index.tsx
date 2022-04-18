import React, { MouseEvent } from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

import { useCustomDispatch } from '../../../../hooks/useCustomDispatch';
import boardApi from '../../../../api/Board';
import { useCustomSelector } from '../../../../hooks/useCustomSelector';
import { IBoard } from '../../../../store/initialStore';
import { deleteBoardById } from '../../../../utils/boards';

import './style.scss';

interface IProps {
  id?: string;
  boardId: string;
  title: string;
  openPopover: (event: MouseEvent<HTMLDivElement>, id: string) => void;
  setIsEdit: (status: boolean) => void;
}

function BoardCard(props: IProps): JSX.Element {
  const dispatch = useCustomDispatch();
  const boards = useCustomSelector<IBoard[]>((store) => store.boards);

  const {
    title = '', boardId, openPopover, id = '', setIsEdit,
  } = props;

  const deleteBoard = async () => {
    const deleteResponse = await boardApi.deleteBoard(boardId);

    if (!deleteResponse.hasError) {
      dispatch({
        boards: deleteBoardById(boards, boardId),
      });
    }
  };

  const handleEditClick = (event: MouseEvent<HTMLDivElement>) => {
    setIsEdit(true);
    openPopover(event, boardId);
  };

  return (
    <div className="boardCard">
      <p className="boardCard__title">{title}</p>
      <div className="boardCard__icons">
        <DeleteOutlineIcon onClick={deleteBoard} />
        <div id={id} onClick={handleEditClick}>
          <DragIndicatorIcon />
        </div>
      </div>
    </div>
  );
}

export default BoardCard;
