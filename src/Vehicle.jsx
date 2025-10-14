import React from 'react'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'
import Card from './Card'
import Logos from './Logos'
import carImg1 from './assets/carImg1.png'
import carImg2 from './assets/carImg2.png'
import carImg3 from './assets/carImg3.png'
import carImg4 from './assets/carImg4.png'
import carImg5 from './assets/carImg5.png'
import carImg6 from './assets/carImg6.png'
import carImg7 from './assets/carImg7.png'
import carImg8 from './assets/carImg8.png'
import carImg9 from './assets/carImg9.png'
import Footer from './Footer'


const Vehicle = () => {
    return (
        <div>
            <Navbar2 />
            <div className='flex justify-center mb-8'>
                <div className='grid grid-cols-3 grid-rows-3 gap-4 mb-18'>
                    <Card Image={carImg1} Brand="Mercedes" Type="Sedan" Price="25" Gearbox="Automat" />
                    <Card Image={carImg2} Brand="Mercedes" Type="Sport" Price="50" Gearbox="Manual" />
                    <Card Image={carImg3} Brand="Mercedes" Type="Sedan" Price="45" Gearbox="Automat" />
                    <Card Image={carImg4} Brand="Porsche" Type="SUV" Price="40" Gearbox="Automat" />
                    <Card Image={carImg5} Brand="Toyota" Type="Sedan" Price="35" Gearbox="Manual" />
                    <Card Image={carImg6} Brand="Porsche" Type="Sedan" Price="50" Gearbox="Automat" />
                    <Card Image={carImg7} Brand="Mercedes" Type="Van" Price="50" Gearbox="Automat" />
                    <Card Image={carImg8} Brand="Toyota" Type="Sport" Price="60" Gearbox="Manual" />
                    <Card Image={carImg9} Brand="Maybach" Type="Sedan" Price="70" Gearbox="Automat" />
                </div>
            </div>
                <Logos/>
        


        </div>
    )
}

export default Vehicle