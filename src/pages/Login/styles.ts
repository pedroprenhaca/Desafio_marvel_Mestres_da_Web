import styled from 'styled-components';

import image_of_heroes from '../../assets/capa_heróis.svg'

 export const LoginScreem = styled.div`
    
    background:url(${image_of_heroes});
    height: 100vh;
    background-repeat:no-repeat ;
    background-size:100vh;
    background-position: right;
`;

export const HeaderContainer = styled.div`
    margin-left:21rem;

    img{
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
        margin-left: 2rem;
    }
`;

export const FormContainer = styled.div`
margin-left: 21rem;
p{
    margin-left: 1.4rem;
    margin-top: 3rem;
    font-family: "Marvel", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: ${props=>props.theme.gray};
    font-size: 1.25rem;
}

div{
    display: flex;
    flex-direction: column;
    gap: 1rem;
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

button{
    width: 23.9375rem;
    height: 4.0625rem;
    border-radius: 2rem;
    background: ${props=>props.theme.red};
    color:${props=>props.theme.white};
    font-family: "Marvel", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.75rem
}
`;

export const Forgotpassword = styled.div`
    div{
    }  
`;