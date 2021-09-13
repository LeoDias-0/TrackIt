import styled from "styled-components"
import { ContainerHabit, ContainerDays } from "./SaveNewHabit"
import DayIcon from "./DayIcon"


const Text = styled.span`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: normal;
    font-size: 19.976px;
    color: #666666;
`

const ContainerWithMargin = styled(ContainerDays)`
    margin-top: 10px;
`

const Habit = ({ text }) => {
    return (
        <ContainerHabit height='91px'>
            <Text>{text}</Text>
            <ContainerWithMargin>
                <DayIcon day='D' isSelected/>
                <DayIcon day='S' />
                <DayIcon day='T' />
                <DayIcon day='Q' isSelected/>
                <DayIcon day='Q' />
                <DayIcon day='S' />
                <DayIcon day='S' />
            </ContainerWithMargin>
        </ContainerHabit>
    )
}

export default Habit