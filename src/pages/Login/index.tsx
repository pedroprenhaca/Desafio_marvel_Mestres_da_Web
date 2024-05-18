import logo from '../../assets/Marvel_Logo.svg';
import {LoginScreem,HeaderContainer,FormContainer,Forgotpassword} from './styles'

export function Login() {
    return(
        <LoginScreem>

            <HeaderContainer>
                <img src={logo} alt="Quadrado vermelho escrito marvel em cor branca" />
                <p>Bem-vindo(a) de volta!</p>
            </HeaderContainer>

            <FormContainer>
                    <div>
                        <p>Acesse sua conta:</p>
                        <input type="text" placeholder='Usuário'/>
                        <input type="text" placeholder='Senha' />
                    </div>
                <Forgotpassword>
                    <div>
                        <input type="checkbox"/> 
                        <label> Salvar login </label>
                        <p>Esqueci a senha</p>
                    </div>
                </Forgotpassword>
                <button>Entrar</button>
                <p>Ainda não tem o login? <span>Cadastre-se</span></p>
            </FormContainer>

        </LoginScreem>
    )
}