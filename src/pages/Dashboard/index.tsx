import React, { useState, MouseEvent, useEffect } from 'react';
import { Popover } from '@material-ui/core';

import CreateCard from './components/CreateCard';
import PopoverWindow from './components/PopoverWindow';
import { useCustomSelector } from '../../hooks/useCustomSelector';
import { IBoard } from '../../store/initialStore';
import BoardCard from './components/BoardCard';
import boardApi from '../../api/Board';
import { useCustomDispatch } from '../../hooks/useCustomDispatch';
import logo from '../../assets/images/small-logo.png';

import './style.scss';

function Dashboard(): JSX.Element {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [currentEditId, setCurrentEditId] = useState<string>('');
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const boards = useCustomSelector<IBoard[]>((store) => store.boards);
  const dispatch = useCustomDispatch();

  const getBoards = async (): Promise<void> => {
    const fetchedBoards = await boardApi.fetchBoards();

    dispatch({
      boards: fetchedBoards,
    });
  };

  useEffect(() => {
    getBoards();
  }, []);

  const openPopover = (event: MouseEvent<HTMLDivElement>, id?: string) => {
    setAnchorEl(event.currentTarget);
    if (id) {
      setCurrentEditId(id);
    }
  };

  const closePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'popover' : undefined;

  return (
    <div className="dashboard">
      <section className="dashboard__workspace">
        <h3 className="dashboard__workspace__title">YOUR WORKSPACES</h3>
        <div className="dashboard__workspace__header">
          <img src={logo} alt="small-logo" className="dashboard__workspace__header__logo" />
          <p className="dashboard__workspace__header__title">Workspace</p>
        </div>
        <div className="boardCreator">
          {
            boards.map((board) => (
              <BoardCard
                id={id}
                key={board.id}
                title={board.title}
                boardId={board.id}
                openPopover={openPopover}
                setIsEdit={setIsEdit}
              />
            ))
          }
          <CreateCard
            id={id}
            openPopover={openPopover}
            setIsEdit={setIsEdit}
          />
        </div>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={closePopover}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
        >
          <PopoverWindow
            closePopover={closePopover}
            isEditClick={isEdit}
            currentEditId={currentEditId}
          />
        </Popover>
      </section>
    </div>
  );
}

export default Dashboard;
