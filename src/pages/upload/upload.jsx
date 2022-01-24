import React from 'react';
import {Button} from 'react-bootstrap';
/*import {
  BrowserRouter as 
  Router,Routes, Route, Link
} from 'react-router-dom';*/

const Upload = () =>{
  function handleSubmit(){

  }
  return (
   <>
   <input type="file"/>
   <Button onSubmit= {handleSubmit()}>Upload</Button>
      </>
  );
}

export default Upload;
