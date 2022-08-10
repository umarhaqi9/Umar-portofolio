import React from 'react';
import {Rings,Circles} from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='loading d-flex justify-content-center align-items-center flex-column text-center'>
      <Circles
        color="#00BFFF" height={150} width={150}
      />
      <h1 className='text-white mt-5'>LOADING</h1>
    </div>
  )
}

export default Loading