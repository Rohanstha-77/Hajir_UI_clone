import React from 'react'

const NavBar = () => {
  return (
    <>
        <header className='bg-slate-50'> 
            <div className='flex justify-between items-center mx-24' style={{height: "95px"}}>
                <div>
                    <img src="./img/logo-hajir.png" alt="" className='h-16' />
                </div>
                <ul className='flex justify-around'>
                    <li className='ml-6'>About Us</li>
                    <li className='ml-6'>Contact Us</li>
                    <li className='ml-6'>Pricing</li>
                </ul>
                <div>
                    <button>Log in</button>
                    <button className='ml-6 border rounded-md px-6 py-2 bg-blue-500 text-white'>Get Started</button>
                </div>
            </div>
        </header>
    </>
  )
}

export default NavBar