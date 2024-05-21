import { Box } from '@mui/material';
import styled from 'styled-components';

export const ModalBoxContainer = styled(Box)`
   
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 100vh;
    
    div{
        display: flex;

        width: 43rem;
        height: 27rem;
        border-radius: 1.875rem;

        background-color: ${props=>props.theme.red};
    }
    
`

export const ImgContainer = styled.div`
    img{
    width: 19rem;
    height: 27rem;
    border-radius: 1.875rem;
}
`

export const ContentContainer = styled.div`
    display: flex;  
    flex-direction: column;
    align-items: initial;
    padding: 3rem;
    
    width: 100%;
    height: 100%;

    h1{
        

        font-family: "Marvel", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 1.8rem;
    }

    p{
        width: 11rem;
        margin-top: 1rem;

        font-family: "Marvel", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 1.3rem;
    }

    label{
        width: 14rem;
        height: 2rem;
        margin-top: 1rem;

        font-family: "Marvel", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 1.5rem;
    }

    svg{
        margin-top: 5rem;
        margin-left: 9rem;
        width: 8rem;
        height: 9rem;
    }

`