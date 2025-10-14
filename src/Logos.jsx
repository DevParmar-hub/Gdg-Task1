import React from 'react'
import Logo1 from './assets/Logo1.png'
import Logo2 from './assets/Logo2.png'
import Logo3 from './assets/Logo3.png'
import Logo4 from './assets/Logo4.png'
import Logo5 from './assets/Logo5.png'
import Logo6 from './assets/Logo6.png'

const Logos = () => {
  return (
    <div>
        <div className='flex justify-center gap-31 mb-30'>
            <img src={Logo1} alt="" />
            <img src={Logo2} alt="" />
            <img src={Logo3} alt="" />
            <img src={Logo4} alt="" />
            <img src={Logo5} alt="" />
            <img src={Logo6} alt="" />
        </div>
    </div>
  )
}

export default Logos