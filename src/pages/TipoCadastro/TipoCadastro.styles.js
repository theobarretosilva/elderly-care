import styled from "styled-components";

export const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LogoStyled = styled.img`
    width: 16vw;
    height: 30vh;
    object-fit: cover;
`

export const TxtIngresso = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
`

export const DivBtns = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 6vh;
    gap: 7vw;
`

export const BtnEscolha = styled.div`
    width: 25vw;
    height: 50vh;
    background-color: white;
    border-radius: 8px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const ImgEscolha = styled.img`
    width: 16vw;
    height: 32vh;
`

export const TxtEscolha = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    text-align: center;
`

export const DivVoltar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0.4vw;
    cursor: pointer;
    position: fixed;
    margin-top: 5vh;
    margin-left: 2vw;
`

export const ImgSeta = styled.img`
    width: 2vw;
    height: 4vh;
`

export const TxtVoltar = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1.35rem;
    color: #CFCFCF;
`