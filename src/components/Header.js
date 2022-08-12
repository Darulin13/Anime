import React from "react";
import styled from "styled-components";

const Container = styled.header`
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
  
    `
const Logo = styled.img`
    width:30%;
    @media(max-width:425px){
        width:50%;
    }

    `
export default function Main(){
    return(
        <Container>
        <Logo src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="Studio Ghibli"/>
        </Container>
    )
}