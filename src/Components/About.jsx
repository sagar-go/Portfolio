import React,{useContext,useState} from 'react'
import { MyContext } from './Context';
import styled from 'styled-components';

function About() {
    const { bgcolor, toggle, color, theme, darkcolor, tablet, buttoncolor, mobile,cardcolor } =
    useContext(MyContext);

const Section = styled.div`

    width:100%;
    background-color: ${bgcolor};
    display:flex;
    align-items:center;
    justify-content:center;

`
const H2= styled.h2`
       
text-align:center;
padding-top:4.2%;
font-size:2.5rem;
font-family: "Poppins", serif;
font-weight:500;
  color:${color};
background-color:${bgcolor};
/* border-bottom:2px solid #807AE8; */
position:relative;
align-items:center;


${mobile({paddingTop:'20%' })}
`

const Container= styled.div`
    height:65vh;
    width:80%;
    background-color:${cardcolor};
    display:flex;
    justify-content:space-evenly;
    text-align:center;
    align-items:center;
    line-height:30px;
    flex-direction:column;
    border-radius:10px;
    margin-top:5%;
    ${mobile({width:'100%' })}

    & h3{
        color:${color};
        width:50%;
        font-weight:500;
        ${mobile({width:'90%', padding:'2%' })}
    }

`

const Mini= styled.div`
    height:10vh;
    width:60%;
    display:flex;
    justify-content:space-around;

    & img{
        height:100%;
        ${mobile({height:'80%' })}
    }
`
  return (
   <>
      <H2 id="3">ABOUT ME</H2>
   <Section >

   <Container>
    <h3>Hello ! My name is Sagar Kumar. I am a self taught Web Developer. I love creating fascinating stuff and making both static and functional websites. <br /> <br /> I am comfortable in using following technologies : </h3>
   <Mini>
   <img src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/html5.svg" alt="" />
    <img src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/css3.svg" alt="" />
    <img src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/javascript.svg" alt="" />
    <img src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/react.svg" alt="" />
    <img src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/bootstrap.svg" alt="" />
   </Mini>
   
    

</Container>
   </Section>

   </>
  )
}

export default About
