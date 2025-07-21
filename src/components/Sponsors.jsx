import React from 'react'

const Sponsors = (props) => {

    const { name, img } = props;

  return (
    <div>
        <img className='m-auto w-40' src={img} alt="" />
        <p className='text-white w-40 text-center m-auto mb-5'>{name}</p>
    </div>
  )
}

export default Sponsors