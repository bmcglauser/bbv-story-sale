import React, { FunctionComponent } from 'react';
import { IData } from '../App';
import './Result.scss'

interface ResultProps {
  data: IData
}

const Result: FunctionComponent<ResultProps> = props => {
  const { data } = props;

  return data.theme === 'light'
  ? (
    <div className={"extra-wrapper light"}>
      <div className="result-wrapper">
        <img src={data.photoURL} alt="clothing"/>
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
        <p>DM for more photos</p>
      </div>
    </div>
  ) : (
    <div className={"extra-wrapper dark"}>
      <div className="result-wrapper">
        <div className="picture-block">
          <h1>{data.title.toUpperCase()}</h1>
          <img src={data.photoURL} alt="clothing"/>
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
      </div>
    </div>
  )
};

export default Result;

