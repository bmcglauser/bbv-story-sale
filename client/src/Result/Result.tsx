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
          <ul>
            <span className="upper-line">
              <li className="measurement">{data.measurementA}</li>
              <li className="measurement">{data.measurementB}</li>
              <li className="bestFit">{data.bestFit}</li>
            </span> <br />
            <span className="lower-line">
              <li className="price">${data.price}</li>
              <li className="asIs">{data.asIs}</li>
              <li className="comments">{data.comments}</li>
            </span>
          </ul>
        </div>
        <p>DM for more photos</p>
      </div>
    </div>
  ) : (
    <div className={"extra-wrapper dark"}>
      <div className="result-wrapper">
        <h1>{data.title.toUpperCase()}</h1>
        <img src={data.photoURL} alt="clothing"/>
        <div className="bottom-block">
          <ul>
              <li className="measurement">{data.measurementA.toUpperCase()}</li>
              <li className="measurement">{data.measurementB.toUpperCase()}</li>
              <li className="bestFit">{data.bestFit.toUpperCase()}</li>
              <li className="price">${data.price}</li>
              <li className="asIs">{data.asIs.toUpperCase()}</li>
              <li className="comments">{data.comments.toUpperCase()}</li>
          </ul>
        </div>
        <p>{'DM for more photos'.toUpperCase()}</p>
      </div>
    </div>
  )
};

export default Result;

