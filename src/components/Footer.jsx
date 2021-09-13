import styled from 'styled-components'


const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: 70px;
    left: 0px;
    bottom: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 34px;
    padding-right: 34px;
    background: #FFFFFF;
    box-sizing: border-box;
`

const Text = styled.span`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: normal;
    font-size: 17.976px;
    text-align: center;
    color: #52B6FF;
`

const ProgressBar = styled.div`
    position: absolute;
    width: 91px;
    height: 91px;
    border-radius: 50%;
    left: calc((100vw - 91px)/2);
    right: calc((100vw - 91px)/2);
    bottom: 10px;
    background-color: #52B6FF;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: normal;
    font-size: 17.976px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Footer = () => {
    return (
        <Container>
            <Text>Hábitos</Text>
            <ProgressBar>Hoje</ProgressBar>
            <Text>Histórico</Text>
        </Container>
    )
}

export default Footer