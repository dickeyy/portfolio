// Modules
import React from 'react'

// Components
import SEOHead from '@/comps/seoHead'

export default function Home() {
	return (
		<main className='
			flex 
			h-screen 
			w-screen 
			justify-center 
			content-center 
			items-center 
			flex-col
		'>

			<SEOHead title='Kyle Dickey' />

			<div className='
				bg-[url("/svg/noise.svg")]
				bg-blend-overlay
				bg-opacity-10
				bg-black
				bg-fixed
				z-99
				absolute
				w-screen
				h-screen
			'></div>

			<div className='
				relative
				flex
				flex-col
				justify-center
				items-center
			'>
				<div className='
					absolute
					w-[20rem]
					sm:w-[30rem]
					sm:h-[30rem]
					h-[20rem]
					bg-gradient-to-r from-cyan-500 to-pink-500
					rounded-full
					blur-[150px]
					animate-blob
				'>
				</div>

				<div className='
					flex
					flex-col
					rounded-full
					z-10
					text-center sm:text-left
				'>
					<p className='text-fuchsia-300 font-code text-xl mb-2'>Hello, my name is</p>
					<h1 className='text-7xl sm:text-9xl italic font-bold'>Kyle Dickey</h1>
				</div>

			</div>
    	</main>
  	)
}