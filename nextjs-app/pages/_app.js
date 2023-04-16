import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/provider'
import React from 'react';

import theme from '../styles/theme.js'
import { useRouter } from 'next/router.js';

export default function App({ Component, pageProps }) {
  
	const router = useRouter()
  const { id } = router.query

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} productId={id} />
    </ChakraProvider>
  )
}