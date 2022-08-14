import React from 'react'
import HeroSection from './components/HeroSection'
import RecentWork from './components/RecentWork'
import ServicesSection from './components/ServicesSection'

export default function HomeView() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 inline-block w-full">
        <HeroSection />   
        <ServicesSection />
        <RecentWork />
    </div>
  )
}
