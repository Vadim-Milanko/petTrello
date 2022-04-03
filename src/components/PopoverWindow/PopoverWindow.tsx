import React from 'react';
import { useFormik } from 'formik';

import CustomForm from '../CustomForm';
import boardPreview from '../../assets/images/board-preview-skeleton.svg';
import { newBoardSchema } from '../../utils/validationSchema';
import CustomButton from '../CustomButton';

import './style.scss';

const initialValues = {
  boardTitle: '',
};

export type popoverFormFields = 'boardTitle';

const popoverFormInfo = [
  {
    id: 'outlined-email',
    name: 'boardTitle' as popoverFormFields,
    placeholder: 'Board title*',
  },
];

export interface IBoardData {
  boardTitle: string;
}

function PopoverWindow(): JSX.Element {
  const onSubmit = (boardData: IBoardData) => {
    console.log(boardData);
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
      <CustomForm
        formClassName="signUpWrap__innerSection__form popoverWindow-input form"
        formInfo={popoverFormInfo}
        values={formik.values}
        handleBlur={formik.handleBlur}
        handleSubmit={formik.handleSubmit}
        handleChange={formik.handleChange}
        touched={formik.touched}
        errors={formik.errors}
      >
        <p>
          You can add a few more boards to the workspace - 10 boards.
          In the free version, workspaces can have up to 10 open boards. To add more, subscribe.
        </p>
        <CustomButton
          buttonClassName="addBoardBtn"
          isDisabled={false}
          text="Create"
          type="submit"
        />
      </CustomForm>
    </div>
  );
}

export default PopoverWindow;
