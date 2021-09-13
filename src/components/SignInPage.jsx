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

const SignInPage = () => {
    return (
        <Container>
            <ImgContainer src="./assets/logo.svg" />
            <InputBox placeholder='email' width='303px' height='45px' />
            <InputBox placeholder='senha' width='303px' height='45px' />
            <InputBox placeholder='nome' width='303px' height='45px' />
            <InputBox placeholder='foto' width='303px' height='45px' />
            <LoadingButton text={'Cadastrar'} width='303px' height='45px' />
            <NoBorderButton>
                Já tem uma conta? Faça login!
            </NoBorderButton>
        </Container>
    )
}

export default SignInPage