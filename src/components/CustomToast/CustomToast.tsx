import React, { memo } from "react";
import { Alert } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";

import { IRegisterResponse } from "../../pages/SignUp/SignUp";

export interface IProps {
  response: IRegisterResponse | null;
  setToastVisible: (isVisible: boolean) => void
}

const CustomToast: React.FC<IProps> = memo((props: IProps): JSX.Element => {
  const { response, setToastVisible } = props;

  const closeToast = () => setToastVisible(false);

  return (
      <Snackbar open autoHideDuration={3000} onClose={closeToast}>
        <Alert onClose={closeToast} severity={response?.hasError ? "warning" : "success"}>
          {response?.message}
        </Alert>
      </Snackbar>
  );
});

export default CustomToast;
