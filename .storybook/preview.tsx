import React from "react"
import type { Preview } from "@storybook/react"
import { Inter as FontSans } from "next/font/google"


import "../styles/globals.css"

import { withThemeByClassName } from "@storybook/addon-themes";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    Story => (
      <main className={fontSans.className}>
        <Story />
      </main>
    ),
    withThemeByClassName({
      themes: {
          // nameOfTheme: 'classNameForTheme',
          light: '',
          dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
  ]
}

export default preview
