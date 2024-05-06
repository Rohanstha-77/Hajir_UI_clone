import React from 'react'

const Card = ({icon,heading,paragraph}) => {
  return (
    <>
        <div className='flex flex-col rounded-md p-6 w-64 shadow-lg'> 
            {icon}
            <h1 className='text-2xl font-normal py-6'>{heading}</h1>
            <p className='text-lg'>{paragraph}</p>
        </div>
    </>
  )
}

export default Card