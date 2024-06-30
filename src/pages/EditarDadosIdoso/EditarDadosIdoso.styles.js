import styled from "styled-components";

export const MainStyled = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8vw;
    width: 100vw;
    height: 89vh;
`

export const BoxFundo = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 34vw;
    height: 65vh;
    padding: 2vh 1.5vw 2vh 1.5vw;
`

export const TituloBox = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
`

export const DivInput = styled.div`
    width: 100%;
    height: 5.6vh;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.7vh 0.5vw 0.7vh 0.5vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2vh;
`

export const InputStyled = styled.input`
    height: 100%;
    width: 26.9vw;
    border: none;
    font-size: 1vw;
    font-weight: 500;
`

export const BtnConfirmar = styled.button`
    background-color: #0077B6;
    height: 4.3vh;
    width: 100%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    font-size: 1.2rem;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    margin-top: 3vh;
    cursor: pointer;
`

export const TextAreaStyled = styled.textarea`
    width: 100%;
    height: 18vh;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.7vh 0.5vw 0.7vh 0.5vw;
    margin-top: 2vh;
`

export const SelectStyled = styled.select`
    height: 100%;
    width: 52.5vw;
    border: none;
    font-size: 1vw;
    font-weight: 500;
`