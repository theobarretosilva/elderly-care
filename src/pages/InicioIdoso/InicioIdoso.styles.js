import styled from "styled-components";

export const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 2vw;
    padding-right: 2vw;
`

export const TxtInicial = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 2vh;
`

export const Linha = styled.div`
    width: 100%;
    height: 1px;
    background-color: black;
    margin-top: 0.6vh;
`

export const DivFiltros = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2vw;
    margin-top: 4vh;
`

export const SelectStyled = styled.select`
    width: 10vw;
    height: 5vh;
    background-color: white;
    border: 1px solid black;
    border-radius: 7px;
    padding-left: 0.2vw;
`

export const DivCards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 4vw;
    flex-wrap: wrap;
    row-gap: 5vh;
    width: 100%;
    margin-top: 5vh;
`