"use client"
import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
margin:0 10px ;
margin-bottom:10px;`
const Div=styled.div`
padding: 20px;
text-align: center;
border-radius: 6px;`
const NameDiv=styled.div`
font-size: 26px;
margin-top: 10px;
    margin-bottom: 10px;
    color: var(--softTextColor);
    font-family: 'Yatra One';
    @media only screen and (max-width: 600px){
      font-size:15px;
    
    }`
const CopyrightDiv=styled.div`
 color: var(--softTextColor);
font-family: 'Laila';
    font-size: 22px;
    margin-top: 10px;

    @media only screen and (max-width: 600px){
      font-size:13px;
    
    }    `
const Span=styled.span`
color:red;`
const Footer = () => {
  return (
    <Container>
    <Div>
      <NameDiv > Made with  <Span >&hearts;</Span> By Nixx </NameDiv>
      <CopyrightDiv >© 2024 Just Blog</CopyrightDiv>
    </Div>
  </Container>
  )
}

export default Footer