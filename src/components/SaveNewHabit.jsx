import styled from 'styled-components'
import InputBox from './InputBox'
import DayIcon from './DayIcon'
import LoadingButton from './LoadingButton'

const ContainerHabit = styled.div`
    position: relative;
    box-sizing: border-box;
    background: #FFFFFF;
    border-radius: 5px;
    width: 100%;
    height: ${({height}) => height};
    padding-top: 19px;
    padding-left: 18px;
    padding-right: 18px;
    margin-bottom: 10px;
`

const ContainerDays = styled.div`
    display: flex;
`

const ContainerButtons = styled.div`
    position: absolute;
    bottom: 15px;
    right: 16px;
`

const CancelButton = styled.button`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: normal;
    font-size: 15.976px;
    text-align: center;
    color: #52B6FF;
    background-color: inherit;
    border-width: 0;
    margin-right: 23px;
`

const SaveNewHabit = () => {
    return (
        <ContainerHabit height='180px' >
            <InputBox placeholder='nome do hábito' width='303px' height='45px' />
            <ContainerDays>
                <DayIcon day='D' isSelected/>
                <DayIcon day='S' />
                <DayIcon day='T' />
                <DayIcon day='Q' isSelected/>
                <DayIcon day='Q' />
                <DayIcon day='S' />
                <DayIcon day='S' />
            </ContainerDays>

            <ContainerButtons>
                <CancelButton>Cancelar</CancelButton>
                <LoadingButton text='Salvar' width='84px' height='35px' fontSize='15.976px' />
            </ContainerButtons>
        </ContainerHabit>
    )
}

export default SaveNewHabit
export {
    ContainerHabit,
    ContainerDays
}