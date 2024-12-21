  import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
         text: '#100c09',
         background: '#f9f6f4',
         primary: '#f45e15',
         secondary: '#5a5a5a',
         accent: '#979797',
      },
    },
  },
  plugins: [],
} satisfies Config;
