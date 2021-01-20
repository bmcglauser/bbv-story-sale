import React, { useState, ChangeEvent, MouseEvent } from 'react';
import './App.scss';
import Result from './Result';
import Form from './Form'

export interface IData {
  title: string;
  photoURL: string;
  bestFit: string;
  measurementA: string;
  measurementB: string;
  price: number;
  asIs: string;
  comments: string;
}
const dataDefault: IData = {
  title: '',
  photoURL: '',
  bestFit: 'BEST FIT - ',
  measurementA: 'CHEST - ',
  measurementB: '',
  price: 0,
  asIs: 'AS-IS - ',
  comments: ''
};

function App() {
  const [data, setData] = useState(dataDefault);
  const [pictureView, setPictureView] = useState(false);

  function textHandler(e: ChangeEvent<HTMLInputElement>) {
    setData((data: IData) => {
      const entry =
        e.target.name === 'title'
          ? e.target.value
          : e.target.value.toUpperCase();
      return {
        ...data,
        [e.target.name]: entry
      };
    });
  }

  function togglePicture (e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setPictureView(p => !p);
  }

  function fileHandler(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        setData((data) => {
          return {
            ...data,
            photoURL: (e.target && `${e.target.result}`) || ''
          };
        });
      };

      reader.readAsDataURL(e.target.files[0]); // convert to base64 string
    }
  }



  return (
    <div className="app-wrapper">
      {pictureView ? <Result data={data} /> : <Form data={data} fileHandler={fileHandler} textHandler={textHandler} />}
      {pictureView
        ? <button className="back-button" onClick={togglePicture}>BACK TO FORM</button>
        : <button className="preview-button" onClick={togglePicture}>PREVIEW</button>}
    </div>
  );
}

export default App;
