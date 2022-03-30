import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useCustomSelector } from '../../hooks/useCustomSelector';

import './style.scss';

function Loader(): JSX.Element {
  const isActive = useCustomSelector<boolean>((store) => store.ui.loader.isActive);

  return (
    <div className={`loader-wrap ${isActive ? 'visible' : ''}`}>
      <CircularProgress size={80} />
    </div>
  );
}

export default Loader;
