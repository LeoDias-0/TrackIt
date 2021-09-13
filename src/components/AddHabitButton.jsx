import styled from 'styled-components'


const ContainerAddButton = styled.button`
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: normal;
    font-size: 26.976px;
    padding-bottom: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    border-width: 0;
`


const AddHabitButton = () => {
    return (
        <ContainerAddButton>
            +
        </ContainerAddButton>
    )
}

export default AddHabitButton