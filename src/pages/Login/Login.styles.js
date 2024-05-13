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

export const BoxLogin = styled.div`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    background-color: white;
    padding: 4vh 1.5vw 4vh 1.5vw;
    width: 28vw;
    height: 55vh;
    border-radius: 10px;
`

export const TxtWelcome = styled.h1`
    font-weight: 700;
    font-size: 1.6vw;
    text-align: center;
`

export const DivStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
`

export const PInsInf = styled.p`
    font-weight: 500;
    font-size: 1.1vw;
    margin-top: 6vh;
    margin-bottom: 1.4vh;
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
    width: 100%;
    border: none;
    font-size: 1vw;
    font-weight: 500;
`

export const IconStyled = styled.img`
    height: 3vh;
    width: 2.5vw;
`

export const PEsqueciSenha = styled.p`
    font-size: 1vw;
    font-weight: 400;
    text-align: end;
    cursor: pointer;
`

export const BtnEntrar = styled.button`
    background-color: #0077B6;
    height: 5.2vh;
    width: 70%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    font-size: 1.5vw;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    margin-top: 7vh;
`

export const PCriarConta = styled.p`
    font-size: 0.9vw;
    color: black;
    font-weight: 500;
    text-align: center;
`