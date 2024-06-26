import styled from "styled-components";

export const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5vh 5vw 5vh 5vw;
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

export const DivLogoForm = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 4vw;
`

export const DivLogoForm1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LogoStyled = styled.img`
    width: 16vw;
    height: 20vh;
    object-fit: cover;
`

export const BoxForm = styled.div`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    background-color: white;
    padding: 4vh 1.1vw 4vh 1.1vw;
    width: 30vw;
    height: 65vh;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`

export const TxtWelcome = styled.h1`
    font-weight: 600;
    font-size: 1.5vw;
`

export const TxtInsertInfo = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 400;
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

export const IconStyled = styled.img`
    height: 3vh;
    width: 2.5vw;
`

export const BoxForm2 = styled.div`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    background-color: white;
    padding: 1.5vh 1.5vw 1.5vh 1.5vw;
    width: 55vw;
    height: 85vh;
    border-radius: 10px;
`

export const TxtSobreVoce = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    /* margin-bottom: 10vh; */
`

export const SelectStyled = styled.select`
    height: 100%;
    width: 52.5vw;
    border: none;
    font-size: 1vw;
    font-weight: 500;
`

export const TextAreaStyled = styled.textarea`
    width: 100%;
    height: 30vh;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.7vh 0.5vw 0.7vh 0.5vw;
    margin-top: 2vh;
`

export const BtnCadastrar = styled.button`
    background-color: #0077B6;
    height: 4.3vh;
    width: 100%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    font-size: 1.2rem;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    margin-top: 0.2vh;
    cursor: pointer;
`

export const DivFormEndereco = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
`

export const Linha = styled.div`
    width: 100%;
    height: 1px;
    background: black;
    margin-top: 2vh;
    margin-bottom: 0.8vh;
`