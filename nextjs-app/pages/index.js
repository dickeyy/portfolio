import Head from 'next/head'
import theme from '@/styles/theme'
import { Box, Heading, Text, VStack } from '@chakra-ui/layout'
import { ChakraProvider, useColorMode, useColorModeValue, useToast } from '@chakra-ui/react'
import React from 'react'

// Components
import NavBar from '@/comps/navbar'
import Hero from '@/comps/hero'

export default function Home() {

	const { toggleColorMode } = useColorMode();
  	const text = useColorModeValue('dark', 'light');
	const toast = useToast()

	React.useEffect(() => {

		if (text === 'dark') {
			// set the color mode to dark
			toggleColorMode()
		}

	}, [text])
	

  return (
    <ChakraProvider theme={theme}>
		<Head>
			<title>dickey</title>
			<meta name="description" content="Kyle Dickey - Freelance Developer / College Student" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="https://dickey.gg/logo.png" />

			{/* //   <!-- Facebook Meta Tags --> */}
			<meta property="og:url" content="https://dickey.gg" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="dickey" />
			<meta property="og:description" content="Kyle Dickey - Freelance Developer / College Student" />
			<meta property="og:image" content="https://dickey.gg/logo.png" />

			{/* <!-- Twitter Meta Tags --> */}
			<meta name="twitter:card" content="summary_small_image" />
			<meta property="twitter:domain" content="dickey.gg" />
			<meta property="twitter:url" content="https://dickey.gg" />
			<meta name="twitter:title" content="Kyle Dickey - Freelance Developer / College Student" />
			<meta name="twitter:description" content="Kyle Dickey - Freelance Developer / College Student" />
			<meta name="twitter:image" content="https://dickey.gg/logo.png" />
		</Head>

		<Box>
			<Box
				display={'flex'}
				flexDirection={'column'}
			>

				<NavBar />

				<Hero />
				

			</Box>

		</Box>
		

    </ChakraProvider>
  )
}
