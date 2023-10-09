// Modules
import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Components
import SEOHead from '@/comps/seoHead'
import HeroHome from '@/comps/heroHome'
import Footer from '@/comps/footer'
import Projects from '@/comps/projects'
import AboutMe from '@/comps/aboutMe'

export default function Home() {
	return (
		<main className={`flex min-h-screen flex-col justify-center items-center px-10 ${inter.className}`}>

			<SEOHead title='Kyle Dickey - Junior fullstack developer' />

			<HeroHome />

			<AboutMe />

			<Projects />

			<Footer />

    	</main>
  	)
}