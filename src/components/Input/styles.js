import styled from "styled-components"

export const InputContainer = styled.input`
    padding: 15px;
    font-size: 14px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    margin-top: 5px;
    border-radius: 4px;
    transition: all linear 160ms;
    outline: none;

    &:focus {
        border: 1px solid #f72585;
    }
`