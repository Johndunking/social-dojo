import React from 'react'
import { Bars } from 'react-loader-spinner';

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Bars
      type={Bars}
      color="#00BFFF"
      height={50}
      width={200}
      className="m-5"

      />
      <p className="text-1g text-center px-2">{message}</p>

    </div>
  )
}

export default Spinner