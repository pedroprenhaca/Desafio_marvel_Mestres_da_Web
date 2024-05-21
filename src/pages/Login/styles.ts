import styled from 'styled-components';

import image_of_heroes from '../../assets/capa_heróis.svg'
import { Link } from 'react-router-dom';

export const ComponentContainer = styled.div`
    display: flex;
`

export const BackgroundImageContainer = styled.div `
     background-image: url(${image_of_heroes});
     display: flex;
     width: 50%;
     background-size: cover;
`

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 100vh;
    margin-left: 11rem;
`
export const HeaderContainer = styled.div`
   

    img{
        border: 1px solid ${props=>props.theme.gray};
        width: 23rem;
        height: 7.5625rem;  
        margin-top: 8rem;
    }

    p{
        font-family: "Marvel", sans-serif;
        font-weight: 400;
        font-style: normal;
        color: ${props=>props.theme.red};
        font-size: 2.5rem;
        margin-top: 1rem;
    }
`;

export const FormContainer = styled.div`
    flex: 1;
`;

export const LoginAndPassword = styled.div `
    display:flex;
    flex-direction:column;
    gap: 1.2rem;

    p{
    margin-top: 3rem;
    font-family: "Marvel", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: ${props=>props.theme.gray};
    font-size: 1.25rem;
}
input{
   
   width: 23.9375rem;
   height: 4.5625rem;
   padding: 2rem;
   border-radius: 6rem;
   background: ${props=>props.theme.white};
   color: ${props=>props.theme.gray};
   font-family: "Marvel", sans-serif;
   font-weight: 400;
   font-style: normal;
   font-size: 1.3rem;
}
`

export const Forgotpassword = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 2rem;
    div{
        input{
            width: 1rem;
            height: 1rem;
        }
        label{
            font-family: "Marvel", sans-serif;
            font-weight: 400;
            font-style: normal;
            font-size: 1.2rem;
            color: ${props=>props.theme.gray}; 
        }
    }

    p{
        font-family: "Marvel", sans-serif;
            font-weight: 400;
            font-style: normal;
            font-size: 1.2rem;
            color: ${props=>props.theme.gray};
            border-bottom: 1px solid  ${props=>props.theme.red};
            cursor: pointer;
    }

`

export const StyledLinkButton = styled(Link)`
    button{
    width: 23.9375rem;
    height: 4.0625rem;
    margin-top: 1.5rem;
    border-radius: 2rem;
    border: none;
    cursor: pointer;

    background: ${props=>props.theme.red};
    color:${props=>props.theme.white};

    font-family: "Marvel", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.75rem;
    

   
    }
`
;

export const RegisterContainer = styled.div`
    display: flex;
    justify-content:center;
    margin-top: 2rem;
    gap:0.5rem;

    font-family: "Marvel", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1rem;
    span{
        color: ${props=>props.theme.red};
        cursor: pointer;
    }
`