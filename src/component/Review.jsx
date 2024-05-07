import React from 'react'
import ReviewCard from './card/ReviewCard'

const Review = () => {
  return (
    <>
        <div className='py-8 px-4 'style={{background:"#f3f4f6"}}>
            <div>
                <h1 className='text-3xl font-semibold text-primary mb-4 text-center'>Hajir reviews</h1>

            </div>
            <div className='flex justify-center gap-4'>
                <ReviewCard name="BIPIN SHRESTHA" paragraph="“This attendance app has revolutionized how I track my work hours. It's user-friendly, provides accurate data, and the leave management features are a lifesaver!”" image="./img/testi1.png"/>

                <ReviewCard name="ROSHAN POKHREL" paragraph="“I love how this app keeps me organized with my schedule and leaves. It's reliable, easy to use, and the reporting features help me stay on top of my productivity goals.”" image="./img/testi2.png"/>

                <ReviewCard name="KAUSHAL CHAUDHARY" paragraph="“This attendance app is a time-saving gem! Easy to use, accurate tracking, and seamless leave management make it indispensable for any team.”" image="./img/testi3.png"/>
            </div>
            <div className='flex justify-center items-center'>  
                <button className='mt-6 border rounded-lg px-6 py-2 bg-blue-500 text-white'>More Review</button>
            </div>
        </div>
    </>
  )
}

export default Review