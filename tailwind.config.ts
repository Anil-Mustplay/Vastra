import type { Config } from 'tailwindcss'
export default { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { maroon: '#541323', gold: '#b4945a', cream: '#f7f2ea' }, fontFamily: { serif: ['Georgia', 'serif'] } } }, plugins: [] } satisfies Config
