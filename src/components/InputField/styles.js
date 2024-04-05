import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Input = styled.input`
    width: 100%;
    padding: 1.2rem 1.2rem;
    border: 1px solid #dadce0;
    background: #d9d9d9;
    border-radius: 14px;
    border: none;
    font-size: .92rem;
    outline-color: transparent;
    font-family: sans-serif;

    &:focus {
      outline: none;
    }

    &:not(:placeholder-shown) + span,
    &:focus + span {
        transform: translateX(12px) translateY(-17px);
        font-size: 0.75rem;
        font-weight: 600;
        padding: 0 6px;
    }

    &:not(:focus) + span {
        color: #808080;
    }
`

export const Label = styled.span`   
    position: absolute;
    left: 0;
    font-family: sans-serif;
    padding-left: 1.2rem;
    font-size: 1rem;
    color: #7f8fa6;
    pointer-events: none;
    transition: 0.6s;
`