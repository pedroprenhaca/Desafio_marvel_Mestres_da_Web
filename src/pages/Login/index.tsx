import logo from '../../assets/Marvel_Logo.svg';
import {HeaderContainer,FormContainer,Forgotpassword, StyledLinkButton, LoginContainer, LoginAndPassword, RegisterContainer, BackgroundImageContainer, ComponentContainer} from './styles'

export function Login() {
    return(

    <ComponentContainer>
        <LoginContainer>
            <HeaderContainer>
                <img src={logo} alt="Quadrado vermelho escrito marvel em cor branca" />
                <p>Bem-vindo(a) de volta!</p>
            </HeaderContainer>

            <FormContainer>
                    <LoginAndPassword>
                        <p>Acesse sua conta:</p>
                        <input type="text" placeholder='Usuário'/>
                        <input type="text" placeholder='Senha' />
                    </LoginAndPassword>
                <Forgotpassword>
                    <div>
                        <input type="checkbox"/> 
                        <label> Salvar login </label>
                    </div>
                        <p>Esqueci a senha</p>
                </Forgotpassword>
                <StyledLinkButton to='/'><button>Entrar</button></StyledLinkButton>

                <RegisterContainer>
                    <p>Ainda não tem o login? 
                    <span>Cadastre-se</span></p>
                </RegisterContainer>
                
            </FormContainer>

        </LoginContainer>
        <BackgroundImageContainer/>
    </ComponentContainer>

    )
}