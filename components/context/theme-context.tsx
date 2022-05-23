import { createContext } from "react";

export const themes = {
  light: {
    foreground: "rebeccapurple",
    background: "white",
  },
  dark: {
    foreground: "white",
    background: "rebeccapurple",
  },
}

export const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {}
});