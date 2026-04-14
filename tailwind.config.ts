import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme: {
          surface: "var(--color-surface)",
          "surface-muted": "var(--color-surface-muted)",
          "surface-subtle": "var(--color-surface-subtle)",
          border: "var(--color-border)",
          "border-strong": "var(--color-border-strong)",
          heading: "var(--color-heading)",
          "text-muted": "var(--color-text-muted)",
          "text-subtle": "var(--color-text-subtle)",
          "text-faint": "var(--color-text-faint)",
          primary: "var(--color-primary)",
          "primary-hover": "var(--color-primary-hover)",
          "primary-soft": "var(--color-primary-soft)",
          "primary-deep": "var(--color-primary-deep)",
          "footer-bg": "var(--color-footer-bg)",
          "footer-surface": "var(--color-footer-surface)",
          "footer-border": "var(--color-footer-border)",
          "footer-text-muted": "var(--color-footer-text-muted)",
        },
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', "Arial", "sans-serif"],
      },
      fontSize: {
        '36px': ['36px', { lineHeight: '1.2' }],
        '72px': ['72px', { lineHeight: '1.1' }],
      },
    },
  },
  plugins: [],
} satisfies Config;
