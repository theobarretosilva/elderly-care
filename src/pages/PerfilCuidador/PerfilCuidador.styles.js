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
    height: 80vh;
    padding: 2vh 1.5vw 2vh 1.5vw;
`

export const DivDados = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Foto = styled.img`
    width: 10vw;
    height: 21vh;
    border-radius: 9999px;
    border: 1px solid black;
`

export const TxtNome = styled.p`
    font-size: 1.5rem;
    font-weight: 700;
`

export const TxtInfo = styled.p`
    font-size: 1.1rem;
    font-weight: 500;
`

export const Linha = styled.div`
    width: 100%;
    height: 1px;
    background-color: black;
    margin-top: 2vh;
    margin-bottom: 1vh;
`

export const TxtDescricao = styled.p`
    font-size: 1rem;
    font-weight: 500;
    max-height: 41vh;
`

export const BtnEditar = styled.button`
    background-color: #0077B6;
    height: 4.3vh;
    width: 100%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    font-size: 1.2rem;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    margin-top: 5vh;
    cursor: pointer;
`