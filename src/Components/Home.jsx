import React, { useContext, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BiSun } from "react-icons/bi";
import "../App.css";
import { BsMoonStarsFill } from "react-icons/bs";
import { MyContext } from "./Context";
import { Typewriter } from "react-simple-typewriter";
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi";

export const Home = () => {
  const { bgcolor, toggle, color, theme, darkcolor, tablet, navcolor, mobile } =
    useContext(MyContext);

  const [hide, sethide] = useState(true);

  const Section1 = styled.div`
    background: ${bgcolor};
    height: 90vh;
    width: 100%;
    display: flex;
    ${mobile({
      flexDirection: "column",
      position: "relative",
      height: "90vh",
      paddingTop: "22.5vh",
    })}
  `;

  const Navbar = styled.div`
    height: 10vh;
    position: sticky;
    top: 0%;
    align-items: center;
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding-right: 3%;
    background-color: ${navcolor};
    z-index: 99;
    ${mobile({
      display: "flex",
      top: "0",
      paddingRight: "0",
      zIndex: "22",
      justifyContent: "space-between",
    })}
  `;

  const Menu2 = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 15%;
    gap: 7%;
    font-size: 1.3rem;
    transition: 5s all ease-in-out;
    width: 80%;
    color: ${color};
    font-family: "Poppins", sans-serif;
    ${mobile({
      flexDirection: "column",
      top:'0',
      position: "absolute",
      zindex: "99",
      paddingLeft: "0%",
      marginTop: "10vh",
      color: `${color}`,
      background: `${navcolor}`,
      gap: "12%",
      width: "100%",
    })}

    @media only screen and (max-width:700px) {
      height: ${({ hide }) => (hide ? "20vh" : "92vh")};
     visibility: ${({ hide }) => (hide ? "hidden" : "visible")};
      transition: ${({ hide }) => (hide ? "1s all ease-in-out" : "1s all ease-in-out")};
    }
  `;

  const Dark = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    z-index: 999;
    ${mobile({ paddingLeft: "5%" })}
  `;

  const Left = styled.div`
    width: 50%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 8%;
    padding-left: 10%;
    ${mobile({
      height: "72vh",
      width: "100%",
      paddingLeft: "5%",
      justifyContent: "start",
      paddingRight: "5%",
    })}

    & h4 {
      display: none;
      ${mobile({
        fontSize: "3rem",
        marginRight: "-2rem",
        transform: "rotateZ(360deg)",
        display: "block",
        opacity: "0.2",
        color: `${color}`,
        marginLeft: "-0.5%",
        marginTop: "9%",
        letterSpacing: "10px",
        width: "100%",
      })}
    }
  `;
  const Right = styled.div`
    width: 50%;
    height: 90vh;
    display: flex;
    justify-content: end;
    align-items: center;
    letter-spacing: 5px;
    ${mobile({ display: "none" })}
    & h2 {
      font-size: 5rem;
      transform: rotateZ(90deg);
      margin-right: -15%;
      opacity: 0.3;
      color: ${color};
      margin-top: 8%;
      font-family: "Allerta Stencil", sans-serif;
      ${tablet({ fontSize: "4rem", marginRight: "-5rem" })}
      ${mobile({ fontSize: "3rem", marginRight: "-2rem" })}
    }
  `;

  const Text = styled.div`
    height: 26vh;
    color: ${color};
    margin-bottom: 5%;
    width: 100%;
    font-family: "Alice", serif;

    ${mobile({
      height: "10vh",
      marginLeft: "0",
      marginTop: "20%",
      marginBottom: "1%",
    })}
    & h2 {
      font-size: 3rem;
      border-bottom: 3px solid ${darkcolor};
      padding-bottom: 3%;
      font-weight: 500;
      ${tablet({ fontSize: "2.5rem" })}
      ${mobile({ fontSize: "1.8rem" })}
    }
    & h3 {
      font-size: 3rem;
      padding-top: 3%;
      font-weight: 500;
      ${tablet({ fontSize: "2.5rem" })}
      ${mobile({ fontSize: "2rem" })}
    }
  `;

  const Li = styled.li`
    list-style: none;
    position: relative;
    cursor: pointer;
    
    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      height: 3px;
      width: 0%;
      background-color: ${darkcolor};
      transition: 500ms ease-in-out;
    }
    &:hover::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      height: 3px;
      width: 100%;
      background-color: ${darkcolor};
    }
    & a {
      color: ${color};
    }
  `;

  const Span = styled.div`
    height: 30vh;
    color: ${color};
    /* margin-bottom: 10%; */
    width: 100%;
    font-family: "Alice", serif;
    font-size: 3.2rem;
    ${tablet({ fontSize: "2.5rem" })}
    ${mobile({ height: "10vh", fontSize: "1.7rem" })}
  `;

  const Ham = styled.div`
    display: none;
    ${mobile({ display: "block", paddingRight: "5%" })}
  `;

  return (
    <>
      <Navbar>
        <Menu2 hide={hide}>
          <Li hide={hide}>
            <a href="#1">Home</a>
          </Li>
          <Li hide={hide}>
            <a href="#2">Projects</a>
          </Li>
          <Li hide={hide}>
            <a href="#3">About me</a>
          </Li>
          <Li hide={hide}>
            <a href="#2">Contact</a>
          </Li>
        </Menu2>

        <Dark>
          {theme ? (
            <BsMoonStarsFill
              onClick={() => toggle()}
              fontSize={"25px"}
              style={{ cursor: "pointer", color: `${darkcolor}` }}
            />
          ) : (
            <BiSun
              onClick={() => toggle()}
              fontSize={"30px"}
              style={{ cursor: "pointer", color: `${darkcolor}` }}
            ></BiSun>
          )}
        </Dark>
        <Ham onClick={() => sethide(!hide)}>

          {!hide ? (
            <BiMenuAltLeft color={theme ? "white" : "black"} size={"35px"} />
          ) : (
            <BiMenuAltRight color={theme ? "white" : "black"} size={"35px"} />
          )}
        </Ham>
      </Navbar>

      <Section1 id="1">
        <Left>
          <Span>
            <span style={{ color: `${darkcolor}` }}> Let's&nbsp;</span>
            <Typewriter
              loop
              cursor
              cursorStyle="_"
              typeSpeed={[70]}
              deleteSpeed={[60]}
              words={["Create together", "Design together", "Develop together"]}
            />
          </Span>
          <h4>PORTFOLIO</h4>
          <Text>
            <h2>Front-End Developer</h2>
            <h3>Sagar Kumar</h3>
          </Text>
        </Left>
        <Right>
          <h2>PORTFOLIO</h2>
        </Right>
      </Section1>
    </>
  );
};
