import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
  styles: {
    global: {
      body: {
        bg: "#030006",
        color: 'white',
      },
    },
  },
  colors: {
    brand: {
        pink: {
            50: "#ed7fcf",
            100: "#e966c5",
            200: "#e54cbb",
            300: "#e232b2",
            400: "#de19a8",
            500: "#DB009F",
            600: "#c5008f",
            700: "#af007f",
            800: "#99006f",
            900: "#83005f",
        },
        purple: {
            50: "#ac80d3",
            100: "#9c67ca",
            200: "#8b4dc2",
            300: "#7a34b9",
            400: "#6a1bb0",
            500: "#5a02a8",
            600: "#510197",
            700: "#480186",
            800: "#3e0175",
            900: "#360164",
        },
        gray: {
            50: "#b5b2b7",
            100: "#a6a3a8",
            200: "#97939a",
            300: "#88848b",
            400: "#79757d",
            500: "#6b666f",
            600: "#605b63",
            700: "#555158",
            800: "#4a474d",
            900: "#403d42",
        }
    }
    
  }
}

// 3. extend the theme
const theme = extendTheme(config)

export default theme