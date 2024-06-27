import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow:{
        'inner-custom':"inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        'inner-custom2':"inset 0px 4px 4px 0px rgba(0, 0, 0, 0.08)",
        'custom': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'custom2': '0px 1px 4px 0px rgba(0, 0, 0, 0.1)',
        'custom3':"-4px 8px 20px 0px rgba(0, 0, 0, 0.1)"
      },
      fontFamily:{
        Poppins:['var(--font-poppins)', 'sans-serif'],
      },
      dropShadow:{
        'custom-as':"0 4px 4px 0 rgba(0, 0, 0, 0.25)"
      },
      fontWeight:{
        DEFAULT:'font-normal',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      colors: {
        lightGray:"#FCFCFC",
        lightOrange:"#FEF4F2",
        customBlue:"#E0EBF9",
        graycustom:"#4F4F4F",
        customRed:"#EFABCF",
        customGreen:"#ECFDF3",
        customGrey:"#D1D1D1",
        customBlack:"#3D3D3D",
        customOrange:"#DC4A2D",
        customGray: '#E7E7E7',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
       'custom-l':"2.25rem",
        lg: "49px",
        md: '0.375rem',
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config