import styled from 'styled-components'


const Container = styled.button`
    background: #52B6FF;
    border-radius: 4.63636px;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border-width: 0;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: normal;
    font-size: ${({fontSize}) => fontSize ? fontSize : '20.976px'};
    text-align: center;
    color: #FFFFFF;
`

const LoadingButton = ({ text, width, height, fontSize }) => {
    return (
        <Container width={width} height={height} fontSize={fontSize}>
            {text}
        </Container>
    )
}

export default LoadingButton