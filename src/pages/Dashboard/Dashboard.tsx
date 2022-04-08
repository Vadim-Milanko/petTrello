import React, { useState, MouseEvent, useEffect } from 'react';
import { Popover } from '@material-ui/core';

import CreateCard from './components/CreateCard/CreateCard';
import PopoverWindow from './components/PopoverWindow/PopoverWindow';
import logo from '../../assets/images/small-logo.png';
import { useCustomSelector } from '../../hooks/useCustomSelector';
import { IBoard } from '../../store/initialStore';
import BoardCard from './components/BoardCard/BoardCard';
import boardApi from '../../api/Board';
import { useCustomDispatch } from '../../hooks/useCustomDispatch';

import './style.scss';

function Dashboard(): JSX.Element {
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

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
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
            boards.map((board, index) => {
              const { title } = board;
              const key = index + title;

              return (
                <BoardCard key={key} title={title} />
              );
            })
          }
          <CreateCard
            id={id}
            handleClick={handleClick}
          />
        </div>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
        >
          <PopoverWindow />
        </Popover>
      </section>
    </div>
  );
}

export default Dashboard;
