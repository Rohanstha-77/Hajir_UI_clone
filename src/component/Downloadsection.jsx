import React from 'react'

const Downloadsection = () => {
  return (
    <>
        <div className='py-12 px-6"'>
            <div className='flex justify-center items-center mx-24'>
                <div>
                    <h1 className='text-5xl font-semibold mb-3 leading-snug'>Download the App and Get Started</h1>
                    <p className='text-xl mb-6'>Find it on Play Store and the App Store</p>
                    <div className='flex'> 
                        <div className='pr-8'>
                            <div className='flex rounded-lg w-52  bg-blue-800 h-fit py-2'>
                                <img src="./img/playstore.png" alt="" className=' mx-2 w-8 h-9 ml-5 mr-2' />
                                <div className='flex flex-col mx-4 '>
                                    <span className='text-white'>Get it on</span>
                                    <span className='text-white font-bold'> Playstore</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex rounded-lg w-52 bg-blue-800 h-fit py-2'>
                                <img src="./img/applelogo.png" alt="" className='w-8 h-9 ml-5 mr-2' />
                                <div className='flex flex-col mx-4'>
                                    <span className='text-white'>Get it on</span>
                                    <span className='text-white font-bold'> Apple Store</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 h-1/2'>
                    <img src="./img/phone.png" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Downloadsection