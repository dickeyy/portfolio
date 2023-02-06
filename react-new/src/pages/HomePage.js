import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, ChakraProvider, Heading, Icon, Text } from "@chakra-ui/react";
import theme from "../theme";
import { FaTwitter, FaInstagram, FaGithub, FaTwitch, FaLinkedin } from 'react-icons/fa';
import React from "react";
import Footer from "../comps/Footer";
import Background from '../assets/Background.svg' 

function HomePage() {

  const projects = [
      {
        "title": "DoxBot",
        "desc": "The last Discord bot you'll ever need",
        "btnText": "Learn More",
        "btnLink": "https://doxbot.xyz"
      },

      {
        "title": "LasTag",
        "desc": "The last gamer tag you'll ever need.",
        "btnText": "Learn More",
        "btnLink": "https://lastag.xyz"
      },

      {
        "title": "Alias",
        "desc": "The fun for all ages party game... Now modernized!",
        "btnText": "Play Now",
        "btnLink": "https://aliasgame.xyz"
      },

      {
        "title": "Counting.exe",
        "desc": "The Twitter bot that counts once a day, that's it.",
        "btnText": "Learn More",
        "btnLink": "https://twitter.com/countingdotexe"
      },

      {
        "title": "Collatz Collab",
        "desc": "The collaborative project to solve the hardest math problem ever.",
        "btnText": "Learn More",
        "btnLink": "https://collatzcollab.com/"
      },

      {
        "title": "Snake Game",
        "desc": "The classic snake game in your browser",
        "btnText": "Play Now",
        "btnLink": "https://snake.dickey.gg"
      },

      {
        "title": "Pong Game",
        "desc": "The classic pong game in your browser",
        "btnText": "Play Now",
        "btnLink": "https://pong.dickey.gg"
      },

      {
        "title": "Typing Game",
        "desc": "A fun game to test your typing skills",
        "btnText": "Play Now",
        "btnLink": "https://typing.dickey.gg"
      },

      {
        "title": "Collatz Calculator",
        "desc": "An algorithm to test numbers against the rules of the Collatz Conjecture",
        "btnText": "Learn More",
        "btnLink": "https://github.com/dickeyy/Collatz-Calculator"
      },

      {
        "title": "Spacebar Tester",
        "desc": "A game to spam your spacebar as much as you can",
        "btnText": "Play Now",
        "btnLink": "https://spacebar.dickey.gg" 
      },

      {
        "title": "SVG Mountains",
        "desc": "A cool SVG art of some mountains and ducks",
        "btnText": "View Now",
        "btnLink": "https://mountains.dickey.gg"
      },

      {
        "title": "DVD Animation",
        "desc": "Watch the DVD logo bounce and try to hit the corners, in your browser!",
        "btnText": "View Now",
        "btnLink": "https://dvd.dickey.gg"
      },

      {
        "title": "Seeds",
        "desc": "The easiest to use bot on Discord",
        "btnText": "Learn More",
        "btnLink": "https://seedsbot.xyz"
      },

      {
        "title": "Jams",
        "desc": "The best music bot on Discord",
        "btnText": "Learn More",
        "btnLink": "https://jamsbot.com"
      },

      {
        "title": "Spotinder",
        "desc": "Tinder... But for finding Spotify songs",
        "btnText": "Play Now",
        "btnLink": "https://spotinder.dickey.gg"
      },

      {
        "title": "Spotify HL",
        "desc": "The higher lower game but for Spotify stats",
        "btnText": "Play Now",
        "btnLink": "https://sphl.dickey.gg"
      },

      {
        "title": "Bunky",
        "desc": "The best way to find your next great roommate",
        "btnText": "Learn More",
        "btnLink": "https://bunky.app"
      },

      {
        "title": "Mirky",
        "desc": "A developer first analytics provider",
        "btnText": "Learn More",
        "btnLink": "https://mirky.app"
      },

      {
        "title": "Travel Log",
        "desc": "A simple way to keep track of all the places you've traveled",
        "btnText": "Learn More",
        "btnLink": "https://travel.dickey.gg"
      },

      {
        "title": "Kyle + Renee",
        "desc": "A website I made for my girlfriend and I",
        "btnText": "View Now",
        "btnLink": "https://kyleandrenee.com"
      }
    ]

  return (
    <ChakraProvider theme={theme}>

      <Box
        textAlign="center"
        w={'100vw'}
        justifyContent={'center'}
        alignItems={'center'}
        p={5}
        bgImage={Background}
        xOverflow={'hidden'}
      >
        <Box 
          h="100vh" 
          alignItems={'center'} 
          dis={'flex'}
        >

          <Box h={'25vh'} />

          <Heading
            transition={'all 0.5s'}
            fontWeight={'900'}
            outlineColor={'#d6f4f4'}
            css={{
              WebkitTextStroke: '4px #d6f4f4',
            }}
            outlineWidth={5}
            fontSize={{ base: '4.5rem', md: '8em' }}
            ml={'5vw'}
            mr={'5vw'}
            textAlign={'center'}
            color={'transparent'}
            fontStyle={'italic'}
            textShadow={'10px 10px 0px #c907cc, 15px 15px 0px #e601c0,20px 20px 0px #e9019a, 25px 25px 0px #f40468, 45px 45px 10px #482896;'}
            _hover={{
              textShadow: '0px 0px 0px #d6f4f4'
            }}
          >
            KYLE DICKEY
          </Heading>

          <Box
            mt={70}
            transition={'all 0.5s'}
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'center'}
            alignItems={'center'}
          >

            {/* Twitter Link */}
            <a href={'https://twitter.com/kyledickeyy'} rel="noreferrer"  target={'_blank'}>
              <Icon as={FaTwitter} w={['2.5rem','4.5rem']} h={['2.5rem','4.5rem']} cursor={'pointer'} ml={[2,5]} mr={[2,5]}_hover={{ dropShadow:'0px 0px 50px #ff03f2', color:'#7d7d7d' }} transition={'all 0.5s'} />
            </a>

            {/* Instagram Link */}
            <a href={'https://instagram.com/kyle.dickeyy'} rel="noreferrer"  target={'_blank'}>
              <Icon as={FaInstagram}  w={['2.5rem','4.5rem']} h={['2.5rem','4.5rem']} cursor={'pointer'} ml={[2,5]} mr={[2,5]} _hover={{ dropShadow:'0px 0px 50px #ff03f2', color:'#7d7d7d' }} transition={'all 0.5s'} />
            </a>

            {/* Github Link */}
            <a href={'https://github.com/dickeyy'} rel="noreferrer"  target={'_blank'}>
              <Icon as={FaGithub} w={['2.5rem','4.5rem']} h={['2.5rem','4.5rem']} cursor={'pointer'} ml={[2,5]} mr={[2,5]} _hover={{ dropShadow:'0px 0px 50px #ff03f2', color:'#7d7d7d' }} transition={'all 0.5s'} />
            </a>

            {/* Twitch Link */}
            <a href={'https://twitch.tv/imdickey'} rel="noreferrer"  target={'_blank'}>
              <Icon as={FaTwitch} w={['2.5rem','4.5rem']} h={['2.5rem','4.5rem']} cursor={'pointer'} ml={[2,5]} mr={[2,5]} _hover={{ dropShadow:'0px 0px 50px #ff03f2', color:'#7d7d7d' }} transition={'all 0.5s'} />
            </a>

            {/* Linkedin Link */}
            <a href={'https://www.linkedin.com/in/kyletdickey/'} rel="noreferrer"  target={'_blank'}>
              <Icon as={FaLinkedin} w={['2.5rem','4.5rem']} h={['2.5rem','4.5rem']} cursor={'pointer'} ml={[2,5]} mr={[2,5]} _hover={{ dropShadow:'0px 0px 50px #ff03f2', color:'#7d7d7d' }} transition={'all 0.5s'} />
            </a>

          </Box>

        </Box>

        <Box h={10} />

        <Box
          w={'80vw'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          m={'auto'}
          backgroundColor={'rgba(180, 180, 180, 0.2)'}
          backdropFilter={'blur(10px)'}
          boxShadow={'rgba(28, 28, 28, 0.2) 0px 0px 10px'}
          borderRadius={'13px'}
          p={10}
          flexDir={'column'}
        >

          <Heading
            fontSize={'6xl'}
          >
            Projects
          </Heading>

          <Box h={5} />

          <Text
            color={'whiteAlpha.600'}
            fontWeight={'600'}
            fontStyle={'italic'}
            fontSize={'2xl'}
          >
            Not in any particular order
          </Text>

          <Box h={10} />

          <Accordion reduceMotion defaultIndex={[0]} allowMultiple={false} allowToggle w={'100%'} >

            {projects.map((project) => (
              
              <AccordionItem
                key={project.title}
                borderWidth={"1px"}
                borderRadius={"13px"}
                mb={5}
                _hover={{
                  boxShadow: '0px 0px 50px #ff03f2'
                }}
              >
              <Text>
                <AccordionButton borderRadius={'13px'} _expanded={{ bg: '#ff03f2' }}>
                  <Box flex='1' display={'flex'} flexDir={'row'} textAlign={'left'} fontSize={'3xl'} fontWeight={'800'}>
                    {project.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Text>
              <AccordionPanel pb={4}>
                <Text
                  fontSize={"2xl"}
                >
                  {project.desc}
                </Text>

                <Box h={5} />
                <a href={project.btnLink} rel={'noreferrer'} target={'_blank'}>
                  <Button
                    colorScheme={'pink'}
                  >
                    {project.btnText}
                  </Button>
                </a>
              </AccordionPanel>
            </AccordionItem>

            ))}

          </Accordion>

        </Box>

        <Box h={'8rem'} />

        <Footer />

      </Box>
    </ChakraProvider>
  );
}

export default HomePage;
