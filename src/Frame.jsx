import React from 'react'
import Icon9 from './assets/Icon9.png'
import Icon10 from './assets/Icon10.png'
import Icon11 from './assets/Icon11.png'

const Frame = () => {
    return (
        <div className='mt-15 mb-10'>
            <div className='flex justify-center'>
                <div className='w-130'>
                    <div className='font-bold text-5xl mt-32 w-78'>Download mobile app</div>
                    <div className='text-gray-500 mt-10 mb-10'>Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna...</div>
                    <div className='flex'>
                        <img src={Icon10} alt="" className='mr-10' />
                        <img src={Icon11} alt="" />
                    </div>
                </div>
                <div>
                    <img src={Icon9} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Frame