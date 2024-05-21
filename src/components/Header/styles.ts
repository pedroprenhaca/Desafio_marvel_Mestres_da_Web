import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem;
    border-bottom: 1px solid rgba(255, 0, 0, 0.53);
    
    img{
        width: 9rem;
        height: 4rem;
    }

    div{
        display: flex;
        align-items: center;
        gap: 1.3rem;

        img{
            width: 5rem;
            height: 5rem;
            border-radius: 3rem;

        }

        p{
            list-style-type: none;
            font-family: "Marvel", sans-serif;
            font-weight: 400;
            font-style: normal;
            font-size: 1.4rem;
        }
    }
`;

export const NavbarContainer = styled.nav`
    
    ul{
        display: flex;
        justify-content: space-between;
        gap: 3rem;
        list-style-type: none;       
    }

    li{
        
        font-family: "Marvel", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 2rem;
    }

`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props=>props.theme.white};
`