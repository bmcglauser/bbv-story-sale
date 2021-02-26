import React, { FunctionComponent, useContext } from 'react';
import { FormDataContext } from '../../utils/FormDataContext';

import './DarkTheme.scss';

const DarkTheme: FunctionComponent = () => {
  const data = useContext(FormDataContext);

  return (
    <>
      <div className="picture-block">
        <h1>{data.title.toUpperCase()}</h1>
        <img src={data.photoURL} alt="clothing" />
      </div>
      <div className="bottom-block">
        <ul>
          <li className="bestFit">{data.bestFit.toUpperCase()}</li>
          <li className="measurement">{data.measurementA.toUpperCase()}</li>
          <li className="measurement">{data.measurementB.toUpperCase()}</li>
          <li className="price">${data.price}</li>
          <li className="comments">{data.comments.toUpperCase()}</li>
          <li className="asIs">{data.asIs.toUpperCase()}</li>
        </ul>
      </div>
    </>
  );
};

export default DarkTheme;
