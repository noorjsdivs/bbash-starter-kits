import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  // Light-only design; 'class' stops NativeWind fighting the system appearance.
  darkMode: 'class',
  theme: {
    extend: {},
  },
} satisfies Config;
