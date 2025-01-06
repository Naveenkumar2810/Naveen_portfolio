/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'smoky-black': 'hsl(0, 0%, 7%)',
        'gray1': 'hsl(240, 2%, 13%)',
        'page': 'hsl(240, 2%, 12%)',
        'highlight1': 'hsl(240, 1%, 17%)',
        'cus-yell':'hsl(45, 100%, 72%)',
        'h': 'hsl(0, 0%, 100%)',
        'heading':'hsl(0, 0%, 98%)',
        'light-gray':'hsl(0, 0%, 84%)',
        'br':'hsl(0, 0%, 22%)'
        
      },
      backgroundImage: {
        'icon': 'linear-gradient(to bottom right, hsl(240, 1%, 25%) 3%,hsl(0, 0%, 19%) 97%',
        'card': 'linear-gradient(to bottom right, hsla(240, 1%, 18%, 0.251) 0%, hsla(240, 2%, 11%, 0) 100%)'
      },
      boxShadow: {
        'icon-sd':'-4px 8px 24px hsla(0, 0%, 0%, 0.25)',
        'dot':'0 0 0 6px hsl(240, 1%, 17%)',
        'card-sd':'0 16px 30px hsla(0, 0%, 0%, 0.125)'
      },
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.6rem',
      'lg': '1.5rem',
      'full': '9999px',
      'large': '12px',
    }
  },
  plugins: [],
}

