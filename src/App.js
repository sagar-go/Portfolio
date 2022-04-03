import "./App.css";
import { useState, useContext } from "react";
import { MyContext } from "./Components/Context";
import styled, { ThemeProvider } from "styled-components";
import { Home } from "./Components/Home";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
// import {mobile} from "./Components/Context"

function App() {
  // const { theme, toggle, themes, bgcolor, color,mobile } = useContext(MyContext);
  // console.log("themes is", theme);

  // const Container = styled.div`
  //    background: ${bgcolor}; 
  //    color: ${color}; 
  //   border:2px solid black;
  //   height:500vh;
  //   ${mobile ({display : 'none' })}
     
  // `;

  // const Button = styled.button`
  //   border: 2px solid crimson;
  //    background: ${bgcolor};
  //   color: ${color}; 
  //   background: ${theme? "black": "red"};
  //   ${mobile ({display : 'none'})} 

  // `;

  return (
    <>
      {/* <Container>
        <h1>Hello</h1>
      </Container>
      {theme ? (
        <Button  onClick={toggle}>
          Light
        </Button>
      ) : (
        <Button onClick={toggle}>
          Dark
        </Button>
      )}
      <h1> Current theme is {theme}</h1> */}

      <Home/>
      <Projects/>
      <About/>
      <Contact></Contact>
    </>
  );
}

export default App;
