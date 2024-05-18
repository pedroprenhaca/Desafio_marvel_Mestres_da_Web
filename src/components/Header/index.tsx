import { Link } from 'react-router-dom';
import logo from '../../assets/Marvel_Logo.svg';
import { HeaderContainer,NavbarContainer } from './styles';

export function Header(){
    return(
        <HeaderContainer>
            <img src={logo} alt="quadrado vermelho escrito marvel em branco" />
            <NavbarContainer>
                <ul>
                   <Link to='/personagens'> <li>Personagens</li></Link>
                    <Link to='/filmes'><li>Filmes</li></Link>
                    <Link to='/hqs'><li>HQs</li></Link>
                </ul>
            </NavbarContainer>
            <div>
                <img src="https://github.com/pedroprenhaca.png" alt="Foto do usuario ativo" />
                <p>Sair</p>
            </div>
        </HeaderContainer>
    )
}