import React from 'react'
import HomePage from '@/components/HomePages/HomeHero'
import FoodCategory from '@/components/HomePages/FoodCatagery' 
import WhyChouseUs from '@/components/HomePages/WhyCouseUs'
import OurChefs from '@/components/HomePages/OurChefs'
import ChefsHero from '@/components/HomePages/ChefsHero'
import ChefGrid from '@/components/HomePages/ChefGrid'
import Dessert from '@/components/ManuPages/Dessert'
import { Main } from 'next/document'
import MainCours from '@/components/ManuPages/MainCourse'
import Menu from './Manu/page'

const Home = () => {
  return (
    <div>
      <HomePage />
      <FoodCategory />
      <WhyChouseUs />
      <MainCours />
      <Dessert/>
      <OurChefs />
      
      {/* <ChefGrid /> */}
    </div>
  )
}

export default Home
