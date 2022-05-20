import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';

import './style.scss';

const ButtonClassNames = {
  containedPrimary: 'addTodoBtn',
};

function Todos(): JSX.Element {
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  // const getBoards = () => {
  //   dispatch(fetchTodos))
  // };
  //
  // useEffect(() => {
  //   getTodos();
  // }, []);

  const onOpenForm = () => {
    setIsButtonClicked(true);
  };

  const onCloseForm = () => {
    setIsButtonClicked(false);
  };

  return (
    <div className="todos">
      <section className="todos__workspace">
        {
          isButtonClicked ? (
            <div>
              <div>
                <TextField
                  id="outlined-basic"
                  placeholder="Enter list title"
                  variant="outlined"
                />
              </div>
              <div className="addListBtnWrap">
                <Button>Add List</Button>
                <CloseIcon onClick={onCloseForm} />
              </div>
            </div>
          ) : (
            <Button
              variant="contained"
              color="primary"
              classes={ButtonClassNames}
              onClick={onOpenForm}
            >
              <AddIcon />
              <div className="addTodoBtn__title">Add another column</div>
            </Button>
          )
        }

      </section>
    </div>
  );
}

export default Todos;
