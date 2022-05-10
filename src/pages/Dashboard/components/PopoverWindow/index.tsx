import React from 'react';
import { useFormik } from 'formik';

import CustomForm from '../../../../components/CustomForm';
import boardPreview from '../../../../assets/images/board-preview-skeleton.svg';
import { newBoardSchema } from '../../../../utils/validationSchema';
import CustomButton from '../../../../components/CustomButton';
import { useCustomDispatch } from '../../../../hooks/useCustomDispatch';
import { useCustomSelector } from '../../../../hooks/useCustomSelector';
import { IBoard } from '../../../../store/initialStore';
import { addBoard, editBoardTitle } from '../../../../store/sideEffects/board';

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
  const { closePopover, isEditClick, currentEditId } = props;
  const dispatch = useCustomDispatch();
  const boards = useCustomSelector<IBoard[]>((store) => store.boards);

  const onSubmit = async (boardData: IBoardData) => {
    if (isEditClick) {
      dispatch(editBoardTitle(boardData, currentEditId, boards));
      closePopover();
    } else {
      dispatch(addBoard(boardData, boards));
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
