import React from 'react'
import photo3 from './assets/photo3.png'
import photo4 from './assets/photo4.png'
import photo5 from './assets/photo5.png'

const Blog = () => {
    return (
        <div className='mb-30 mt-25'>
            <div className='font-bold text-5xl mb-10 text-center'>Latest blog posts & news</div>
            <div className='flex justify-center gap-6'>
                <div>
                    <img src={photo3} alt="" />
                    <div className='text-xl font-semibold mb-5 mt-5'>How to choose the right car</div>
                    <div className='text-base'>News / 12April 2024</div>
                </div>
                <div>
                    <img src={photo4} alt="" />
                    <div className='text-xl font-semibold mb-5 mt-5'>Which plan is right for me?</div>
                    <div className='text-base'>News / 12April 2024</div>
                </div>
                <div>
                    <img src={photo5} alt="" />
                    <div className='text-xl font-semibold mb-5 mt-5'>Enjoy Speed, Choice & Total Control</div>
                    <div className='text-base'>News / 12April 2024</div>
                </div>

            </div>
        </div>
    )
}

export default Blog