import styled from "styled-components";

export const CardStyled = styled.div`
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 22vw;
    height: 40vh;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 2vw 1.5vh 2vw 1.5vh;
`

export const TxtNome = styled.p`
    font-size: 1.4rem;
    font-weight: 700;
`

export const TxtInfo = styled.p`
    font-size: 0.9rem;
    font-weight: 500;
`

export const Linha = styled.div`
    height: 1px;
    width: 100%;
    background-color: black;
    margin-top: 1vh;
    margin-bottom: 1vh;
`

export const DivBtns = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const BtnAceita = styled.button`
    background-color: green;
    height: 4.3vh;
    width: 45%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    font-size: 1.2rem;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    margin-top: 1vh;
    cursor: pointer;
`

export const BtnRecusa = styled.button`
    background-color: red;
    height: 4.3vh;
    width: 45%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    font-size: 1.2rem;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    margin-top: 1vh;
    cursor: pointer;
`

export const TxtPropAceita = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    color: green;
    text-align: center;
    padding-top: 1vh;
`