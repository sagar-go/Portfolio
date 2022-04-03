import React,{useContext,useState} from 'react'
import styled from 'styled-components'
import { MyContext } from './Context';
import cart from "../Images/cart.png"
import meal from "../Images/meal.png"
import movie from "../Images/movie.png"
import ed from "../Images/Ed.png"
function Projects() {

    const { bgcolor, toggle, color, theme, darkcolor, tablet, buttoncolor, mobile,cardcolor } =
    useContext(MyContext);

  const Section= styled.div`
 
      width:100%;
      background-color: ${bgcolor};
      display:flex;
    align-items:center;
     flex-direction:column;
     padding-bottom:10%;
     padding-top:5%;
  `
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
    const Container= styled.div`
  /* height:70vh; */
    width:80%;
    margin-top:5%;
    background-color:${cardcolor};
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    padding:3% 2% 3% 2%;
    border-radius:10px;

    ${mobile({flexDirection:'column', padding: ' 0 10px 10px 10px',border:'1px solid #686464',flex:'1' })}
    & img{
        height:100%;
        width:50%;
        object-fit:cover;
        border-radius:3px;
        background-position:left;
        ${mobile({height:'30vh', width:'100%', objectFit:'contain' })}
    }


`

const Text= styled.div`
  width:50%;
  height:80%;
  display:flex;
  justify-content:space-around;
  flex-direction:column;
  align-items:center;
  ${mobile({height:'30vh', width:'100%',flex:'1' })}
  & p{
      color: ${color};
      text-align:center;
      padding: 5% 5%;
    }

    & h2{
      color: ${color};
      text-align: center;
    }

    & a{
      width: 33%;
    padding: 2%;
    cursor: pointer;
    text-align:center;
    color:${color};
    border:1px solid ${buttoncolor};
    background-color:${bgcolor};
    transition: 500ms ease-in-out;
    ${mobile({ width:'50%' })}
    }

    & a:hover{
      box-shadow: inset 200px 0 0 0 ${buttoncolor};
      
      
    }

`
  
    return (
    <>
    
<Section id="2">
<H2>PROJECTS</H2>
    <Container>
    <img src={movie} alt="" />
    <Text>
    <h2>Movie App</h2>
    <p>Simple movie app with Api integration and Local Storage
</p>
<p>Tech Stack : HTML, CSS, React</p>
<a href="https://sagar-go.github.io/Final_Movie/" target="_blank">View Project</a>
    </Text>
    
    </Container>
    <Container>
    <img src={meal} alt="" />
    <Text>
    <h2>Meal App</h2>
    <p>Made a simple app like Zomato with 3 different Api's with funcationality of cart
</p>
<p>Tech Stack : HTML, CSS, React</p>
<a href="https://sagar-go.github.io/meal/" target="_blank">View Project</a>
    </Text>
</Container>
<Container>
<img src={cart} alt="" />
<Text>
    <h2>Shopping Cart</h2>
    <p>Simple shopping cart with filters, cart funcationality and Authentication using Local Storage. User can only make purchase if he is logged in.
</p>
<p>Tech Stack : HTML, CSS, React</p>
 <a href="https://sagar-go.github.io/cart/" target="_blank">View Project</a>
    </Text>
</Container>

<Container>
<img src={ed} alt="" />
<Text>
    <h2>Ed-Tech Website</h2>
    <p>Implemented Firebase Authentication for a simple Ed-tech website and Framer Motion
</p>
<p>Tech Stack : HTML, CSS, React, Firebase</p>
<a href="https://sagar-go.github.io/Assignment/" target="_blank">View Project</a>
    </Text>
</Container>

</Section>

    </>
  )
}

export default Projects
