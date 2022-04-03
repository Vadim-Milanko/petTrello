import React, { useState, MouseEvent } from 'react';
import { Popover } from '@material-ui/core';

import Card from '../../components/Card/Card';
import PopoverWindow from '../../components/PopoverWindow/PopoverWindow';
import logo from '../../assets/images/small-logo.png';

import './style.scss';

function Dashboard(): JSX.Element {
  const [boards, setBoard] = useState([]);
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

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
        <div className="boardCreator" />
        {
          boards.map((board, index) => {
            const { boardTitle } = board;
            const key = index + boardTitle;

            return (
              <Card
                cardClassName=""
                key={key}
                title={boardTitle}
                handleClick={() => {}}
              />
            );
          })
        }
        <Card
          cardClassName="addBoardCard"
          id={id}
          handleClick={handleClick}
          title="Create Board"
        />
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
