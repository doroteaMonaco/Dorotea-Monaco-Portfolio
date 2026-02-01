import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				brand: {
					DEFAULT: 'hsl(var(--brand))',
					secondary: 'hsl(var(--brand-secondary))',
					tertiary: 'hsl(var(--brand-tertiary))',
					foreground: 'hsl(var(--brand-foreground))'
				}
			},
			fontFamily: {
				sans: [
					'\"Inter var\"',
					'\"Inter\"',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'\"Segoe UI\"',
					'Roboto',
					'\"Helvetica Neue\"',
					'Arial',
					'\"Noto Sans\"',
					'sans-serif'
				],
				display: [
					'\"Cal Sans\"',
					'\"Inter var\"',
					'\"Inter\"',
					'ui-sans-serif',
					'system-ui',
					'sans-serif'
				]
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.01em' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.01em' }],
				'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
				'2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.02em' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
				'5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
				'6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
				'7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
				'8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
				'9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.03em' }]
			},
			letterSpacing: {
				tighter: '-0.05em',
				tight: '-0.025em',
				normal: '0',
				wide: '0.025em',
				wider: '0.05em',
				widest: '0.1em'
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'92': '23rem',
				'128': '32rem'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-20px) rotate(180deg)' }
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--brand) / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--brand) / 0.6)' }
				},
				'scale-bounce': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' },
					'100%': { transform: 'scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'scale-bounce': 'scale-bounce 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
