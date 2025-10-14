import React from 'react'
import photo from './assets/photo.png'

const info2 = () => {
  return (
    <div>
        <div className='flex justify-center gap-25 mb-15'>
            <img src={photo} alt="" />
            <div>

            <div className='w-130'>
                <div className='flex'>
                    <div className='bg-[#5937E0] rounded-[50px] w-8 h-8 flex justify-center items-center mr-4  font-semibold text-white'>1</div>
                    <div className='text-[20px] font-semibold mb-5 '>Erat at semper </div>
                </div>
                <div className='text-gray-500 mb-7'>Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum</div>
            </div>
             <div className='w-130'>
                <div className='flex'>
                    <div className='bg-[#5937E0] rounded-[50px] w-8 h-8 flex justify-center items-center mr-4  font-semibold text-white'>2</div>
                    <div className='text-[20px] font-semibold mb-5 '>Urna nec vivamus risus duis arcu  </div>
                </div>
                <div className='text-gray-500 mb-7'>Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</div>
            </div>
             <div className='w-130'>
                <div className='flex'>
                    <div className='bg-[#5937E0] rounded-[50px] w-8 h-8 flex justify-center items-center mr-4  font-semibold text-white'>3</div>
                    <div className='text-[20px] font-semibold mb-5 '>Lobortis euismod imperdiet tempus  </div>
                </div>
                <div className='text-gray-500 mb-7'>Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi</div>
            </div>
             <div className='w-130'>
                <div className='flex'>
                    <div className='bg-[#5937E0] rounded-[50px] w-8 h-8 flex justify-center items-center mr-4  font-semibold text-white'>4</div>
                    <div className='text-[20px] font-semibold mb-5 '>Cras nulla aliquet nam eleifend amet et</div>
                </div>
                <div className='text-gray-500'>Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default info2