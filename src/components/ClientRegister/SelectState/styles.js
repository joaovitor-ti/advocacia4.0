import styled from "styled-components";
import Select from "react-select";

export const StyledSelect = styled(Select)`
  width: 15rem;
  font-size: 16px;
  border-radius: 4px;
  padding: 5px;
  color: #000;

  .Select-control {
    color: #000;
    display: flex;
    padding: 30px
    align-items: center;
    background-color: #fff;

    &:hover {
      border-color: #aaa;
    }
  }

  .Select-menu {
    background-color: #fff;
    border: 1px solid #ccc;
    color: #000;
    border-top: none; 
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }

  .Select-option {
    color: #333;
    padding: 10px;
    color: #000;

    &:hover {
      background-color: #eee;
    }
  }

  .Select-option.is-selected {
    background-color: #ddd;
    color: #000;
  }

  .Select-value {
    color: #333;
    font-weight: bold;
  }

  .Select-placeholder {
    color: #999;
  }

  .Select-arrow-zone {
    svg {
      fill: #aaa;
    }
  }
`;
