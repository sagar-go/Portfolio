import React, { createContext, useState } from "react";
import { css, ThemeProvider } from "styled-components";
import App from "../App";

export const MyContext = createContext();
function Context({ children }) {
  const [theme, settheme] = useState(true);

  const tablet = (children) => {
    return css`
      @media only screen and (max-width: 1100px) {
        ${children}
      }
    `;
  };


  const mobile = (children) => {
    return css`
      @media only screen and (max-width: 700px) {
        ${children}
      }
    `;
  };

  const light = {
    bgcolor: "",
    text: "black",
    dark: "orange",
    card: '#F3F3FF',
    button: 'orange',
    footercolor:"#7858fd",
    navcolor:"white"
    
  };

  const dark = {
    bgcolor: "#121212",
    text: "#a8b2bb",
    dark:  "#faf600eb ",
    card: '#1a1a1b',
    button: '#807AE8',
    footercolor:"black",
    navcolor:"#121212"
  };

  const themes = {
    false: light,
    true: dark,
  };

  const toggle = () => {
    settheme(!theme);
  };
  const bgcolor = themes[theme].bgcolor;
  const color = themes[theme].text;
  const darkcolor = themes[theme].dark;
  const cardcolor = themes[theme].card;
  const buttoncolor = themes[theme].button;
  const footercolor = themes[theme].footercolor;
  const navcolor = themes[theme].navcolor;

  return (
    <MyContext.Provider
      value={{ navcolor, light, dark, toggle, themes, theme, bgcolor, color, mobile,darkcolor,tablet ,buttoncolor,footercolor, cardcolor}}
    >
      <ThemeProvider theme={themes[theme]}>
        {children}
      </ThemeProvider>
    </MyContext.Provider>
  );
}

export default Context;
