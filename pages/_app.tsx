import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { useState } from "react";
import { ThemeContext, themes } from "../components/context/theme-context";

import '../styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {

  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  }

  const themeVal = {
    theme,
    toggleTheme
  }

  return (
    <SessionProvider session={pageProps.session}>
      <ThemeContext.Provider value={themeVal}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </SessionProvider>
  );
};

export default App;
