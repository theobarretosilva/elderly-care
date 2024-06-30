import styled from "styled-components";

export const Modal = styled.div`
    background: white;
    padding: 20px;
    border-radius: 5px;
    width: 400px;
    max-width: 80%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ModalTitle = styled.h2`
    margin: 0;
`;

export const ModalCloseButton = styled.button`
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
`;

export const ModalContent = styled.div`
    margin: 20px 0;
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`;

export const BtnConfirm = styled.button`
    background: green;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
`;

export const BtnCancel = styled.button`
    background: red;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
`;

export const FotoIdoso = styled.img`
    border-radius: 3px;
    width: 100%;
    height: 25vh;
    object-fit: cover;
`