import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import { useCustomDispatch } from '../../../../hooks/useCustomDispatch';
import boardApi from '../../../../api/Board';

import './style.scss';
import { useCustomSelector } from '../../../../hooks/useCustomSelector';
import { IBoard } from '../../../../store/initialStore';
import { deleteBoardById } from '../../../../utils/boards';

interface IProps {
  id: string;
  title: string;
}

function BoardCard(props: IProps): JSX.Element {
  const dispatch = useCustomDispatch();
  const boards = useCustomSelector<IBoard[]>((store) => store.boards);

  const { title = '', id } = props;

  const deleteBoard = async () => {
    const deleteResponse = await boardApi.deleteBoard(id);

    if (deleteResponse.isDeleteSuccess) {
      dispatch({
        boards: deleteBoardById(boards, id),
      });
    }
  };
  return (
    <div className="boardCard">
      <p className="boardCard__title">{title}</p>
      <div className="boardCard__logo"><DeleteOutlineIcon onClick={deleteBoard} /></div>
    </div>
  );
}

export default BoardCard;
