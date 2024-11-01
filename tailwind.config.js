/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: '360px'
    },
    colors: {
      bg: {
        lightBlue: '#F8FAFF',
        mediumBlue: '#B7C6E7',
        softBlue: '#C2D2F4',
        white: '#FFFFFF',
        paper: {
          lightBlue: '#F8FAFF',
        },
        button: {
          blue: {
            "hover": '#1252DB'
          }
        }
      },
      text: {
        primary: '#1D253C',
        secondary: '#666666',
        white: '#FFFFFF',
        lightBlue: '#C2D2F4'
      },
      border: {
        paper: {
          primary: '#B7C6E7',
          hover: '#2B6BF3'
        },
        input: {
          default: '#C2D2F4',
          active: '#2B6BF3'
        },
        button: {
          primary: '#DDE7FD'
        }
      },
      icons: {
        default: '#B7C6E7'
      },
      accent: {
        blue: '#2B6BF3',
        yellow: '#FFDD2D',
        red: '#FD466E'
      }
    },
    extend: {
      fontFamily: {
        "intro-bold": ['Intro-Bold', 'sans-serif'],
        "intro-book": ['Intro-Book', 'sans-serif'],
        "intro-book-italic": ['Intro-Book-Italic', 'sans-serif'],
        "intro-light": ['Intro-light', 'sans-serif'],
        "intro-regular": ['Intro-regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

