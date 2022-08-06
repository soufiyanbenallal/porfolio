import React from 'react'
import DotsSvg from '../../components/DotsSvg'
import GetInTouch from '../../components/GetInTouch'
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
        <RecentWork />
        {/* <RecentWork inverse /> */}
        <ServicesSection />
        <GetInTouch />
    </div>
  )
}
