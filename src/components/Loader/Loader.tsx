import React, { useContext } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { AppContext } from '../../context';

import './style.scss';

function Loader(): JSX.Element {
  const { storeState: { ui: { loader: { isActive } } } } = useContext(AppContext);

  return (
    <div className={`loader-wrap ${isActive ? 'visible' : ''}`}>
      <CircularProgress size={80} />
    </div>
  );
}

export default Loader;
