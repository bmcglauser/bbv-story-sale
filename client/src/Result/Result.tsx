import React, { FunctionComponent } from 'react';
import { IData } from '../App';
import './Result.scss'

interface ResultProps {
  data: IData
}

const Result: FunctionComponent<ResultProps> = props => {
  const { data } = props;

  return (
    <div className="extra-wrapper">
      <div className="result-wrapper">
        <img src={data.photoURL} alt="clothing"/>
        <h1>{data.title}</h1>
        <ul>
          <li className="measurement">{data.measurementA}</li>
          <li className="measurement">{data.measurementB}</li>
          <li className="bestFit">{data.bestFit}</li>
          <li className="price">${data.price}</li>
          <li className="asIs">{data.asIs}</li>
          <li className="comments">{data.comments}</li>
          <li>DM FOR MORE PHOTOS</li>
        </ul>
      </div>
    </div>
  )
};

export default Result;

