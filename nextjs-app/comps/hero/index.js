import { Box, ChakraProvider, Grid, GridItem, Heading, IconButton, Image, Text } from '@chakra-ui/react'

import "@fontsource/gochi-hand"
import "@fontsource/source-code-pro"

import theme from '../../styles/theme.js'

import React from 'react'
import { SiLeetcode } from 'react-icons/si';
import { FaDiscord, FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Hero(props) {

    const [bgPos, setBgPos] = React.useState({ x: 0, y: 0 });

    const [dickeyAge, setDickeyAge] = React.useState(0);
    const [dickeyAgeString, setDickeyAgeString] = React.useState('');

    React.useEffect(() => {

        // calculate dickey's age, his birthday is 05/02/2004
        const today = new Date();
        const birthDate = new Date(2004, 4, 2);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        setDickeyAge(age);
        setDickeyAgeString(age.toString());

        const handleMouseMove = (e) => {
            setBgPos({
                x: e.clientX / window.innerWidth * 5,
                y: e.clientY / window.innerHeight * 5,
            });

        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
       
    }, []);



  return (
    <ChakraProvider theme={theme}>
      
        <Box
            display={'flex'}
            w={'100vw'}
            h={'100vh'}
            bgImage={'url(images/Sprinkle.png)'}
            bgPos={'static'}
            // zoom in on the background
            bgSize={['', '', '', '110%']}
            bgColor={'rgba(0,0,0,0.4)'}
            bgBlendMode={'overlay'}
            // make the background parralax
            bgAttachment={'fixed'}
            flexDirection={'column'}
            bgPosition={`${bgPos.x}% ${bgPos.y}%`}
        >  

            <Box
                display={'flex'}
                flexDirection={'row'}
            >

                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    textAlign={['center', 'center', 'center', 'left']}
                    w={['100vw', '100vw', '100vw', '50vw']}
                    h={'80vh'}
                    pl={['1', '1', '10vw', '10vw']}
                    mt={['2rem', '5rem', '10vh', '10vh']}
                    pt={['10rem', '8rem', '0', '0']}
                    flexDirection={'column'}
                >

                    <Heading as={'h1'} fontSize={['5xl','7xl','7xl','7xl']} pr={['5','5','5','0']} pl={['5','5','5','0']} >
                        Freelance  
                        <Heading as={'span'} fontSize={['5xl','7xl','7xl','7xl']} color={'brand.pink.300'}  fontFamily={'Gochi Hand'} > developer </Heading> 
                        +
                        <Heading as={'span'} fontSize={['5xl','7xl','7xl','7xl']} > college student </Heading>
                    </Heading>

                    <Text mt={'1rem'} fontSize={'xl'} pr={['10','10','10','0']} pl={['10','10','10','0']} w={['100vw', '100vw', '100vw', '40vw']} fontWeight={'medium'} color={'brand.gray.100'}>
                        Kyle Dickey - <Text as={'span'} color={'brand.pink.300'} fontWeight={'bold'}>{dickeyAge}</Text> years old
                    </Text>

                    <Box
                        display={'flex'}
                        flexDirection={'row'}
                        // align the buttons to the left on mobile
                        w={['100vw', '100vw', '40vw', '40vw']}
                        justifyContent={['center', 'center', 'flex-start', 'flex-start']}
                        mt={'8'}
                    >
                        <Grid templateColumns={'repeat(3,1fr)'} gap={4}>
                            <GridItem>
                                <a href='https://github.com/dickeyy' target={'_blank'}>
                                    <IconButton icon={<FaGithub />} colorScheme={'brand.gray'} ml={['1rem', '1rem','0','0']} variant={'outline'} size={'lg'} fontSize={'3xl'} fontWeight={'bold'} p={'2rem 1.5rem'}></IconButton>
                                </a>
                            </GridItem>

                            <GridItem>
                                <a href='https://www.linkedin.com/in/kyletdickey/' target={'_blank'}>
                                    <IconButton icon={<FaLinkedin />} colorScheme={'brand.gray'} ml={['1rem', '1rem','0','0']} variant={'outline'} size={'lg'} fontSize={'3xl'} fontWeight={'bold'} p={'2rem 1.5rem'}></IconButton>
                                </a>
                            </GridItem>

                            <GridItem>
                                <a href='https://leetcode.com/dickey' target={'_blank'}>
                                    <IconButton icon={<SiLeetcode />} colorScheme={'brand.gray'} ml={['1rem', '1rem','0','0']} variant={'outline'} size={'lg'} fontSize={'3xl'} fontWeight={'bold'} p={'2rem 1.5rem'}></IconButton>
                                </a>
                            </GridItem>

                            <GridItem>
                                <a href='https://instagram.com/kyle.dickeyy' target={'_blank'}>
                                    <IconButton icon={<FaInstagram />} colorScheme={'brand.gray'} ml={['1rem', '1rem','0','0']} variant={'outline'} size={'lg'} fontSize={'3xl'} fontWeight={'bold'} p={'2rem 1.5rem'}></IconButton>
                                </a>
                            </GridItem>

                            <GridItem>
                                <a href='https://twitter.com/kyledickeyy' target={'_blank'}>
                                    <IconButton icon={<FaTwitter />} colorScheme={'brand.gray'} ml={['1rem', '1rem','0','0']} variant={'outline'} size={'lg'} fontSize={'3xl'} fontWeight={'bold'} p={'2rem 1.5rem'}></IconButton>
                                </a>
                            </GridItem>

                            <GridItem>
                                <a href='https://twitch.tv/imdickey' target={'_blank'}>
                                    <IconButton icon={<FaTwitch />} colorScheme={'brand.gray'} ml={['1rem', '1rem','0','0']} variant={'outline'} size={'lg'} fontSize={'3xl'} fontWeight={'bold'} p={'2rem 1.5rem'}></IconButton>
                                </a>
                            </GridItem>
                        </Grid>
                    </Box>

                    

                </Box>      

                

                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    w={['100vw', '100vw', '50vw', '50vw']}
                    mt={'10rem'}
                    pr={['1', '1', '10vw', '10vw']}
                    ml={'5rem'}
                    flexDirection={'column'}
                    borderRadius={'8px'}
                >

                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        w={['100vw', '100vw', '50vw', '50vw']}
                        pr={['1', '1', '10vw', '10vw']}
                        ml={'5rem'}
                        flexDirection={'row'}
                        borderRadius={'8px'}
                    >

                        
                    </Box>

                </Box>

            </Box>
            
            <Image src={'images/Wave.png'} w={'100vw'} h={['25%', '18%', '15%', '10%']} />

        </Box>       

    </ChakraProvider>
  )
}
