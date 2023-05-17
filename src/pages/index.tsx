// Modules
import React from 'react'

// Components
import SEOHead from '@/comps/seoHead'
import HeroHome from '@/comps/heroHome'
import Footer from '@/comps/footer'

export default function Home() {
	return (
		<main className='
			flex 
			dark
			h-screen 
			w-screen 
			justify-center 
			content-center 
			items-center 
			flex-col
		'>

			<SEOHead title='Kyle Dickey' />

			<HeroHome />

			<Footer />

			
    	</main>
  	)
}