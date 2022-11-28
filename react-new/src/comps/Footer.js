import * as React from 'react';
import { ChakraProvider, Text, Link, Badge, Button, Box, Image, ColorModeScript, Show, Drawer, useDisclosure, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Hide, Icon } from '@chakra-ui/react';
import { NavLink } from "react-router-dom";
import theme from '../theme';
import { GiHamburger, GiHamburgerMenu } from 'react-icons/gi';
import { FaTwitter, FaTwitch, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdMail } from 'react-icons/md'


function Footer() {

    const [size, setSize] = React.useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = () => {
        onOpen()
    }
    

  return (
    <ChakraProvider theme={theme} justifyContent={'center'}>
        <Hide breakpoint='(max-width: 580px)'>
      <Box 
        w={'90vw'} 
        p={'1.5rem'}
        pb={'3rem'}
        bottom={'0'}
        position={'static'}
        right={'0px'}
        left={'0px'}
        height={'fit-content'}
        backgroundColor={'rgba(180, 180, 180, 0.2)'}
        backdropFilter={'blur(10px)'}
        boxShadow={'rgba(28, 28, 28, 0.2) 0px 0px 10px'}
        borderRadius={'13px'}
        margin={'auto'}
        >
            <Box
                width={'100%'}
                justifyContent={'right'}
                right={'30px'}
                position={'absolute'}
                alignItems={'flex-end'}
                mt={-3}
                alignSelf={'center'}
                textAlign={'right'}
            >   
            <a href='https://twitter.com/kyledickeyy' target="_blank">
                <Icon as={FaTwitter} w={8} h={8} mt={2.5} mr={5} color={'whiteAlpha.700'} _hover={{ color:'gray.600' }} />
            </a>

            <a href='https://instagram.com/kyle.dickeyy' target="_blank">
                <Icon as={FaInstagram} w={8} h={8} mt={2.5} mr={5} color={'whiteAlpha.700'} _hover={{ color:'gray.600' }} />
            </a>

            <a href='https://github.com/dickeyy' target="_blank">
                <Icon as={FaGithub} w={8} h={8} mt={2.5} mr={5} color={'whiteAlpha.700'} _hover={{ color:'gray.600' }} />
            </a>

            <a href='https://twitch.tv/imdickey' target="_blank">
                <Icon as={FaTwitch} w={8} h={8} mt={2.5} mr={5} color={'whiteAlpha.700'} _hover={{ color:'gray.600' }} />
            </a>

            <a href='https://linkedin.com/in/kyletdickey' target="_blank">
                <Icon as={FaLinkedin} w={8} h={8} mt={2.5} mr={5} color={'whiteAlpha.700'} _hover={{ color:'gray.600' }} />
            </a>

            <a href='mailto: kyle@dickey.gg' target="_blank">
                <Icon as={MdMail} w={8} h={8} mt={2.5} mr={5} color={'whiteAlpha.700'} _hover={{ color:'gray.600' }} />
            </a>
            </Box>

            <Box
                width={'20%'}
                justifyContent={'left'}
                left={'10px'}
                position={'absolute'}
                alignItems={'center'}
                display={'flex'}
                flexDirection={'row'}
            >

                    <NavLink to={'/'}>
                        <Link pos={'absolute'} left={'10px'} ml={5} color={'gray.100'}>
                            <Text>Terms</Text>
                        </Link>
                    </NavLink>
                    <NavLink to={'/'}>
                        <Link pos={'absolute'} left={'75px'} ml={5} color={'gray.100'}>
                            <Text>Privacy</Text>
                        </Link>
                    </NavLink>
            </Box>
      </Box>
      </Hide>

        <Show breakpoint='(max-width: 580px)'>

        <Box 
        w={'90vw'} 
        height={125}
        backgroundColor={'rgba(180, 180, 180, 0.2)'}
        backdropFilter={'blur(10px)'}
        boxShadow={'rgba(28, 28, 28, 0.2) 0px 0px 10px'}
        borderRadius={'13px'}
        textAlign={'center'}
        position={'absolute'}
        bottom={'0px'}
        right={'0px'}
        left={'0px'}
        margin={'auto'}
        pt={'2.5rem'}
        >
            <Box
                width={'100%'}
                alignItems={'flex-end'}
                alignSelf={'center'}
                textAlign={'center'}
                
            >   
            <a href='https://twitter.com/kyledickeyy' target="_blank">
                <Icon as={FaTwitter} w={8} h={8} mt={2.5} mr={5} color={'whiteAlpha.700'} _hover={{ color:'gray.600' }} />
            </a>

            <a href='https://instagram.com/kyle.dickeyy' target="_blank">
                <Icon as={FaInstagram} w={8} h={8} mt={2.5} mr={5} color={'whiteAlpha.700'} _hover={{ color:'gray.600' }} />
            </a>

            <a href='https://github.com/dickeyy' target="_blank">
                <Icon as={FaGithub} w={8} h={8} mt={2.5} mr={5} color={'whiteAlpha.700'} _hover={{ color:'gray.600' }} />
            </a>

            <a href='https://twitch.tv/imdickey' target="_blank">
                <Icon as={FaTwitch} w={8} h={8} mt={2.5} mr={5} color={'whiteAlpha.700'} _hover={{ color:'gray.600' }} />
            </a>

            <a href='https://linkedin.com/in/kyletdickey' target="_blank">
                <Icon as={FaLinkedin} w={8} h={8} mt={2.5} mr={5} color={'whiteAlpha.700'} _hover={{ color:'gray.600' }} />
            </a>

            <a href='mailto: kyle@dickey.gg' target="_blank">
                <Icon as={MdMail} w={8} h={8} mt={2.5} mr={5} color={'whiteAlpha.700'} _hover={{ color:'gray.600' }} />
            </a>
            </Box>

            
      </Box>
        </Show>

    </ChakraProvider>
  );
}

export default Footer;