import React from 'react';

type visibleType = string | boolean | undefined;

interface IProps {
  validationClassName: string;
  errorText: string | undefined;
  visible: visibleType;
}

function ValidationText(props: IProps): JSX.Element {
  const {
    validationClassName, visible = false, errorText = '',
  } = props;

  return (
    <div>
      {
        visible
          ? (
            <div className={validationClassName}>
              {errorText}
            </div>
          ) : null
      }
    </div>
  );
}

export default ValidationText;
