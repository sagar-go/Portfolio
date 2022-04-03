import React,{useContext,useState} from 'react'
import { MyContext } from './Context';
import styled from 'styled-components';
import {SiGmail} from 'react-icons/si'
import {FaLinkedinIn, FaWhatsapp, FaGithub} from 'react-icons/fa'

function Contact() {
    const { bgcolor, toggle, color, theme, darkcolor, tablet, buttoncolor, footercolor, mobile,cardcolor } =
    useContext(MyContext);

    const H2= styled.h2`
       
text-align:center;
padding-top:3%;
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

const Section= styled.div`
 width:100%;
 background-color:${bgcolor}  ;
 display:flex;
    align-items:center;
    justify-content:center; 
    padding-bottom:5%;
`

const Container= styled.div`
    height:25vh;
    width:100%;
    background-color:${cardcolor};
    display:flex;
    justify-content:center;
    gap:10%;
    text-align:center;
    align-items:center;
    line-height:30px;
    margin-top:5%;
    border-radius:10px;
    ${mobile({gap:'10%' })}


    & a{
        color:${color};
        height: 45%;
    width: 9%;
    border-radius: 50%;
    padding: 1%;
    text-align: center;
    transition: 0.3s ease-in-out;
    background-origin:center;
    
    ${mobile({gap:'20%', height:'27%', width:'10%' })}

    }

   
    & a:hover{
        color:${buttoncolor};
  transform: scale(1.1);
  transition: 0.3s ease-in-out;
    }

    & p{
      margin-top:6%;
      ${mobile({display:'none'})}
    }
`

const Footer= styled.footer`
    height:15vh;
    display:flex;
    align-items:center;
    justify-content:center; 
    background-color:${footercolor};
    color:${color};

    & h2{
        font-weight:500;
        ${mobile({fontSize:'1rem'})}

    }
`
  return (
    <>
  
  <H2>GET IN TOUCH</H2>
   <Section>
  
      <Container>
  <a href="mailto:sagarrbarthwal@gmail.com" target="_blank"><SiGmail style={{ fontSize:'40px'}}></SiGmail> <p>Gmail</p> </a> 
  <a href="https://api.whatsapp.com/send?phone=918637671010"><FaLinkedinIn style={{ fontSize:'40px'}}/><p>Linkedin</p></a>
  <a href="https://github.com/sagar-go" target="_blank">< FaGithub style={{ fontSize:'40px'}}/><p>Github</p></a>
  <a href="https://wa.me/91863767110" target="_blank" >< FaWhatsapp style={{ fontSize:'40px'}}/> <p> Whatsapp</p></a>
      </Container>
   </Section>
   <Footer>
    <h2>Made by Sagar kumar 💗</h2>
   </Footer>
    </>
  )
}

export default Contact
