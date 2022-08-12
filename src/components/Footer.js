import React from "react";
import styled from "styled-components";

const Container = styled.footer`
    width:100%;
    background-color:#263238;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border:solid red;
    padding-top:20px;

`
const Link = styled.p`
   font-size:1.5rem;
   padding-top:20px;
   @media(max-width:800px){
    font-size:1rem;
   }
`
const Img = styled.img`
    width:100%;
  
`
const GithubIcon = styled.a`
    width:10%;
    @media(max-width:800px){
        width:40%;
       }
  
`
export default function Footer (){
    return(
        <Container>
            <Link>Site By João Pedro Ferreira Carvalho</Link>
            <Link> joaop338328@gmail.com</Link>
           <GithubIcon href="https://github.com/Darulin13"target="_blank"> <Img src="https://img.icons8.com/material-outlined/344/github.png" alt="Github icon"/> </GithubIcon>
         
        </Container>
    )
}