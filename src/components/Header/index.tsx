import logo from '../../assets/Marvel_Logo.svg';
import { HeaderContainer,NavbarContainer, StyledLink } from './styles';

export function Header(){
    return(
        <HeaderContainer>
            <img src={logo} alt="quadrado vermelho escrito marvel em branco" />
            <NavbarContainer>
                <ul>
                   <StyledLink to='/'> <li>Personagens</li></StyledLink>
                    <StyledLink to='/filmes'><li>Filmes</li></StyledLink>
                    <StyledLink to='/hqs'><li>HQs</li></StyledLink>
                </ul>
            </NavbarContainer>
            <div>
                <img src="https://github.com/pedroprenhaca.png" alt="Foto do usuario ativo" />
                <StyledLink to='/login'>Sair</StyledLink>
            </div>
        </HeaderContainer>
    )
}