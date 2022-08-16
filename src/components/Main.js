import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.main`
    width:100%;
    display:grid;
    grid-template-columns:25% 25% 25% 25%;
    border:solid orange;
    padding-top:20px;


    @media(max-width:1440px){
        grid-template-columns: 33.3% 33.3% 33.3%;
    }
    
    @media(max-width:768px){
        grid-template-columns: 50% 50%;
    }
    
    
    @media(max-width:425px){
        grid-template-columns: 100%;
    }


    `
const Title = styled.h1`
    width:80%;
    font-size:1.5rem;
  
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    padding-bottom:20px;
  
    `
const Poster = styled.img`
    width:80%;

    `
const Box = styled.section`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;

   
    `
const Description = styled.p`
    width:80%;
    font-size:1rem;
    padding-top:20px;
    padding-bottom:20px;
`
const Information = styled.section`
    width:80%;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    padding-top:10px;
    
    
`
const Rating = styled.p`
 
    font-size:1.5rem;
    border:solid 2px black;
    background-color:red;
`
const ReleaseDate = styled.p`

    font-size:1.5rem;


`
const RunningTime = styled.p`
  
    font-size:1.5rem;


`
    


export default function Main() {
    const [list, setList] = useState([])
  
    axios.get("https://ghibliapi.herokuapp.com/films").then((response) => {
        setList(response.data)
 

    })
   // const[name,setname]=useState(list.title)
  

    return (
        <Container>
            {
                list.map((item) => (
                    <Box>

                        <Title>{item.title}</Title>
                        <Poster src={item.movie_banner} alt={item.title} />
                        <Information>
                            <Rating>{item.rt_score}</Rating>
                            <ReleaseDate>{item.release_date}</ReleaseDate>
                            <RunningTime>{item.running_time}Min</RunningTime>
                        </Information>
                       
                        <Description>{item.description}</Description>
                    </Box>
                ))
            }

            

        </Container>
    )
}