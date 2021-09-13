import styled from "styled-components"

const Container = styled.div`
    background-color: ${({isSelected}) => isSelected ? '#CFCFCF' : '#FFFFFF'};
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    margin-right: 4px;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: normal;
    font-size: 19.976px;
    color: ${({isSelected}) => isSelected ? '#FFFFFF' : '#DBDBDB'};
    display: flex;
    justify-content: center;
    align-items: center;
`

const DayIcon = ({ day, isSelected }) => {
    return (
        <Container isSelected={isSelected}>
            {day}
        </Container>
    )
}

export default DayIcon