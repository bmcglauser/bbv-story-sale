import React, { FunctionComponent, useContext } from 'react';
import { FormDataContext } from '../utils/FormDataContext';
import DarkTheme from '../Themes/DarkTheme';
import LightTheme from '../Themes/LightTheme';
import './Result.scss';

const Result: FunctionComponent = () => {
  const data = useContext(FormDataContext);

  let page = <div />;
  switch (data.theme) {
    case 'dark':
      page = <DarkTheme />;
      break;
    case 'light':
      page = <LightTheme />;
      break;
    default:
      page = <LightTheme />;
  }

  return (
    <div className={`extra-wrapper ${data.theme}`}>
      <div className="result-wrapper">{page}</div>
    </div>
  );
};

export default Result;
