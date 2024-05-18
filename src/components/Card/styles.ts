import styled from "styled-components";

export const CardContainer = styled.div`
position: relative;

img{
    width: 18.0625rem;
    height: 27.4375rem;     
    border-radius: 1.875rem;
}
`

export const TextContent = styled.div `
width: 18.1rem;
height: 55.7%;
position: absolute;
top: 12rem;
background:${props=>props.theme.red} ;
border-radius: 1.875rem;

h1{
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    font-family: "Marvel", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2rem;
}

h2{
    display: flex;
    justify-content: center;
    padding: 1rem;

    font-family: "Marvel", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.2rem;
}

p{
    display: flex;
    justify-content:center;
    padding: 1rem;

    font-family: "Marvel", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.2rem;
}







`