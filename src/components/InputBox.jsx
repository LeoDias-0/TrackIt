import styled from "styled-components"

const InputContainer = styled.input`
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    margin-bottom: 6px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: normal;
    font-size: 19.976px;
    color: #666666;
    ::placeholder {
        color: #DBDBDB;
    }
`

const InputBox = ({ placeholder, width, height }) => {
    return (
        <InputContainer placeholder={placeholder} width={width} height={height} />
    )
}

export default InputBox