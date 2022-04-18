import React from 'react';

type visibleType = string | boolean | undefined;

interface IProps {
  className: string;
  errorText: string | undefined;
  visible: visibleType;
}

function ValidationText(props: IProps): JSX.Element {
  const {
    className, visible = false, errorText = '',
  } = props;

  return (
    <div>
      {
        visible
          ? (
            <div className={className}>
              {errorText}
            </div>
          ) : null
      }
    </div>
  );
}

export default ValidationText;
