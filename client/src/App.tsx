import React, { useState, ChangeEvent, MouseEvent } from 'react';
import './App.scss';
import Result from './Result';
import Form from './Form';

import { IData, dataDefault, FormDataContext } from './utils/FormDataContext';

function App() {
  const [data, setData] = useState(dataDefault);
  const [pictureView, setPictureView] = useState(false);

  function textHandler(e: ChangeEvent<HTMLInputElement>) {
    setData((data: IData) => {
      return {
        ...data,
        [e.target.name]: e.target.value
      };
    });
  }

  function togglePicture(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setPictureView((p) => !p);
  }
  function resetForm(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setData(dataDefault);
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
      <FormDataContext.Provider value={data}>
        {pictureView ? (
          <>
            <Result />
            <button className="back-button" onClick={togglePicture}>
              BACK TO FORM
            </button>
          </>
        ) : (
          <>
            <Form fileHandler={fileHandler} textHandler={textHandler} />
            <button className="preview-button" onClick={togglePicture}>
              PREVIEW
            </button>
            <button className="clear-button" onClick={resetForm}>
              CLEAR
            </button>
          </>
        )}
      </FormDataContext.Provider>
    </div>
  );
}

export default App;
