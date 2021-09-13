import styled from "styled-components"


const ContainerTopBar = styled.div`
    position: fixed;
    box-sizing: border-box;
    width: 100vw;
    height: 70px;
    left: 0px;
    top: 0px;
    background-color: #126BA5;
    border-width: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 18px;
    padding-right: 10px;
`

const ImgContainer = styled.img`
    width: ${({width}) => width};
    height: ${({height}) => height};
`

const TopBar = () => {
    return (
        <ContainerTopBar>
            <ImgContainer src='./assets/TrackIt.svg' width='97px' height='49px' />
            <ImgContainer src='./assets/avatar.png' width='51px' height='51px' />
        </ContainerTopBar>
    )
}

export default TopBar