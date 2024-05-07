import React from 'react'

const ReviewCard = ({image,paragraph,name}) => {
  return (
    <>
        <div className='flex flex-col items-center rounded-md p-6 w-64 shadow-lg'>
            <img src={image} alt=""  className='h-2/5 w-2/5'/>
            <p className='mt-3'>{paragraph}</p>
            <div>
                <div className='text-center mt-3'>
                    <p>{name}</p>
                    <hr />
                    <span>NEPAL</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default ReviewCard