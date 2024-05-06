import React from 'react'

const Discription = ({image,heading,paragraph}) => {
  return (
    <>
        <div className='mx-24 py-16'>
            <div className='flex justify-center items-center'>
                <div className='mr-8'style={{background:"#f5f4ff"}}>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h1 className='text-4xl font-bold mb-4'>{heading}</h1>
                    <p className='text-2xl font-normal mb-6'>{paragraph}</p>
                </div>
            </div>
        </div>
    </>
)
}

export default Discription