import React from 'react'
import Header from '../../components/Header'
import HeroSection from './components/HeroSection'
import RecentWork from './components/RecentWork'
import ServicesSection from './components/ServicesSection'

export default function HomeView() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 inline-block w-full">
        {/* <DotsSvg /> */}
        <Header />
        <HeroSection />   
        {/* <Box num={1} />
        <Box num={2} />
        <Box num={3} />      */}

        <ServicesSection />
        <RecentWork />
        {/* <RecentWork inverse /> */}
    </div>
  )
}
