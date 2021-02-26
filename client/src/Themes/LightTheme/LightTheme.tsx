import React, { FunctionComponent, useContext } from 'react';
import { FormDataContext } from '../../utils/FormDataContext';

import './LightTheme.scss';

const LightTheme: FunctionComponent = () => {
  const data = useContext(FormDataContext);

  return (
    <>
      <img src={data.photoURL} alt="clothing" />
      <div className="bottom-block">
        <h1>{data.title}</h1>
        <p className="price">${data.price}</p>
        <ul>
          <span className="top line">
            <li className="bestFit">{data.bestFit}</li>
            <li className="measurement">{data.measurementA}</li>
            <li className="measurement">{data.measurementB}</li>
          </span>
          <span className="middle line">
            <li className="comments">{data.comments}</li>
          </span>
          <span className="bottom line">
            <li className="asIs">{data.asIs}</li>
          </span>
        </ul>
      </div>
      <p className="dm">DM for more photos</p>
    </>
  );
};

export default LightTheme;
