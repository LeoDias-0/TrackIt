import styled from 'styled-components'
import InputBox from './InputBox'
import LoadingButton from './LoadingButton'
import NoBorderButton from './NoBorderButton'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E5E5E5;
    width: 100vw;
    height: 100vh;
`

const ImgContainer = styled.img`
    margin-top: 68px;
    margin-bottom: 32px;
`

const LoginPage = () => {
    return (
        <Container>
            <ImgContainer src="./assets/logo.svg" />
            <InputBox placeholder='email' width='303px' height='45px' />
            <InputBox placeholder='senha' width='303px' height='45px' />
            <LoadingButton text={'Entrar'} width='303px' height='45px' />
            <NoBorderButton>
                Não tem uma conta? Cadastre-se!
            </NoBorderButton>
        </Container>
    )
}

export default LoginPage