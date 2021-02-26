import React, { ChangeEvent, FunctionComponent } from 'react';
import { IData } from '../App';

import './Form.scss';

interface FormProps {
  data: IData;
  textHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  fileHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Form: FunctionComponent<FormProps> = (props) => {
  const {data, textHandler, fileHandler} = props;
  
  return (
    <form className="main-form">
      <label htmlFor="title">
        Title
        <br />
        <input
          name="title"
          id="title"
          value={data.title}
          type="text"
          onChange={textHandler}
        />
      </label>
      <label htmlFor="photo">
        Photo
        <br />
        <input name="photo" id="photo" type="file" onChange={fileHandler} />
      </label>
      <label htmlFor="bestFit">
        Best fit
        <br />
        <input
          name="bestFit"
          id="bestFit"
          value={data.bestFit}
          type="text"
          onChange={textHandler}
        />
      </label>
      <label htmlFor="measurementA">
        First measurement
        <br />
        <input
          name="measurementA"
          id="measurementA"
          value={data.measurementA}
          type="text"
          onChange={textHandler}
        />
      </label>
      <label htmlFor="measurementB">
        Second measurement
        <br />
        <input
          name="measurementB"
          id="measurementB"
          value={data.measurementB}
          type="text"
          onChange={textHandler}
        />
      </label>
      <label htmlFor="price">
        Price
        <br />
        <input
          name="price"
          id="price"
          value={data.price}
          type="number"
          onChange={textHandler}
        />
      </label>
      <label htmlFor="comments">
        Further comments?
        <br />
        <input
          name="comments"
          id="comments"
          value={data.comments}
          type="text"
          onChange={textHandler}
        />
      </label>
      <label htmlFor="asIs">
        As is?
        <br />
        <input
          name="asIs"
          id="asIs"
          value={data.asIs}
          type="text"
          onChange={textHandler}
        />
      </label>
      <div className="radio-wrapper">
        <label htmlFor="comments">Light theme
        <input
          name="theme"
          id="theme"
          value="light"
          type="radio"
          onChange={textHandler}
        /></label>
        <label htmlFor="comments">Dark theme
        <input
          name="theme"
          id="theme"
          value="dark"
          type="radio"
          onChange={textHandler}
        /></label>
      </div>
    </form>
    
  )
}

export default Form;