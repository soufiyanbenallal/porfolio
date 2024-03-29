import React from 'react'
import BlogListComponent from './components/BlogListComponent'
import HeroSection from './components/HeroSection'
import ProjectWeventeComponent from './components/ProjectWeventeComponent'
import ServicesSection from './components/ServicesSection'
import WorkHeaderComp from './components/worksHeader/WorkHeader.comp'

export default function HomeView() {
  return (
    <div className="bg-gray-100 dark:bg-gray-1000 inline-block w-full">
        <HeroSection />   
        <WorkHeaderComp />
        <ProjectWeventeComponent />
        <ServicesSection />
        <BlogListComponent />
    </div>
  )
}
