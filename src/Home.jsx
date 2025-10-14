import React from 'react'
import HeroSection from './HeroSection'
import Info1 from './info1'
import Info2 from './info2'
import Choose from './choose'
import Card from './Card'
import carImg1 from './assets/carImg1.png'
import carImg2 from './assets/carImg2.png'
import carImg3 from './assets/carImg3.png'
import carImg4 from './assets/carImg4.png'
import carImg5 from './assets/carImg5.png'
import carImg6 from './assets/carImg6.png'
import Banner1 from './Banner1'
import Frame from './Frame'
import Banner2 from './Banner2'

const Home = () => {
  return (
    <div> <HeroSection />
            <Info1 />
            <Info2 />
            <Choose />
            <div className='flex justify-center mb-8'>
                <div className='grid grid-cols-3 grid-rows-2 gap-4'>
                    <Card Image={carImg1} Brand="Mercedes" Type="Sedan" Price="25" Gearbox="Automat"/>
                    <Card Image={carImg2} Brand="Mercedes" Type="Sport" Price="50" Gearbox="Automat"/>
                    <Card Image={carImg3} Brand="Mercedes" Type="Sedan" Price="45" Gearbox="Automat"/>
                    <Card Image={carImg4} Brand="Porsche" Type="SUV" Price="40" Gearbox="Automat"/>
                    <Card Image={carImg5} Brand="Toyota" Type="Sedan" Price="35" Gearbox="Automat"/>
                    <Card Image={carImg6} Brand="Porsche" Type="Sedan" Price="50" Gearbox="Automat "/>
                </div>
            </div>
            <Banner1 />
            <Frame />
            <Banner2 />
            </div>
  )
}

export default Home