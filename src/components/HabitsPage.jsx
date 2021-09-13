import styled from 'styled-components'
import TopBar from './TopBar'
import Title from './Title'
import AddHabitButton from './AddHabitButton'
import ContentMessage from './ContentMessage'
import Footer from './Footer'
import SaveNewHabit from './SaveNewHabit'
import Habit from './Habit'

const ContainerMainContent = styled.div`
    box-sizing: border-box;
    margin-top: 70px;
    margin-bottom: 70px;
    width: 100vw;
    height: calc(100vh - 140px);
    background-color: #F2F2F2;
    padding-left: 17px;
    padding-right: 18px;
`

const ContainerSeparation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: inherit;
    padding-top: 22px;
    padding-bottom: 28px;
`


const HabitsPage = () => {
    return (
        <>
        <TopBar />
        <ContainerMainContent>
            <ContainerSeparation>
                <Title>Meus hábitos</Title>
                <AddHabitButton />
            </ContainerSeparation>
            <SaveNewHabit />
            <Habit text='Ler 1 capítulo de livro' />
            <ContentMessage>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </ContentMessage>
            
        </ContainerMainContent>
        <Footer />
        </>
    )
}

export default HabitsPage