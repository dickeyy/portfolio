// Modules
import React from 'react'

// Components
import SEOHead from '@/comps/seoHead'
import HeroHome from '@/comps/heroHome'
import Footer from '@/comps/footer'
import ProjectBig from '@/comps/projectBig'
import ProjectSmall from '@/comps/projectSmall'
import Projects from '@/comps/projects'
import AboutMe from '@/comps/aboutMe'

export default function Home() {
	return (
		<div className='
			flex 
			dark
			flex-col
			overflow-x-hidden
		'>

			<SEOHead title='Kyle Dickey' />

			<HeroHome />

			<AboutMe />

			<Projects />

			<Footer />

    	</div>
  	)
}