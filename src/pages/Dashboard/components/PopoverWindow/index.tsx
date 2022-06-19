import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import CustomForm from '../../../../components/CustomForm';
import boardPreview from '../../../../assets/images/board-preview-skeleton.svg';
import { newBoardSchema } from '../../../../utils/validationSchema';
import CustomButton from '../../../../components/CustomButton';
import { useCustomDispatch } from '../../../../hooks/useCustomDispatch';
import { addBoard, editBoardTitle } from '../../../../store/sideEffects/board';
import { getUserFromLS } from '../../../../utils/localStorage';

import './style.scss';

const initialValues = {
  title: '',
};

export type popoverFormFields = 'title';

const popoverFormInfo = [
  {
    id: 'outlined-email',
    name: 'title' as popoverFormFields,
    placeholder: 'Board title*',
  },
];

export interface IBoardData {
  title: string;
}

interface IProps {
  closePopover: () => void;
  isEditClick: boolean;
  currentEditId: string;
}

function PopoverWindow(props: IProps): JSX.Element {
  const navigate = useNavigate();
  const { closePopover, isEditClick, currentEditId } = props;
  const dispatch = useCustomDispatch();
  const currentUser = getUserFromLS();

  const onSubmit = (boardData: IBoardData) => {
    if (isEditClick) {
      dispatch(editBoardTitle(boardData, currentEditId));
      closePopover();
    } else {
      dispatch(addBoard(boardData, () => navigate('/todos/1'), currentUser.id));
      closePopover();
    }
  };

  const formik = useFormik<IBoardData>({
    initialValues,
    onSubmit,
    validationSchema: newBoardSchema,
  });

  return (
    <div className="popoverWindow">
      <p className="popoverWindow__title">Create Board</p>
      <img className="popoverWindow__img" src={boardPreview} alt="board preview" />
      <CustomForm<IBoardData>
        formClassName="signUpWrap__innerSection__form popoverWindow-input form"
        formInfo={popoverFormInfo}
        values={formik.values}
        handleBlur={formik.handleBlur}
        handleSubmit={formik.handleSubmit}
        handleChange={formik.handleChange}
        touched={formik.touched}
        errors={formik.errors}
        focus
      >
        <p>
          You can add a few more boards to the workspace - 10 boards.
          In the free version, workspaces can have up to 10 open boards. To add more, subscribe.
        </p>
        <CustomButton
          className="addBoardBtn"
          isDisabled={!formik.values.title.length}
          text={isEditClick ? 'Edit' : 'Create'}
          type="submit"
        />
      </CustomForm>
    </div>
  );
}

export default PopoverWindow;
