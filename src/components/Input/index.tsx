import styled from "styled-components";
import { colors } from "../../styles/variables";

const Input = styled.input`
    width: 90%;
    padding: 10px;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 16px;
    margin-top: 8px;

`

export const Select = styled.select`
    width: 90%;
    padding: 10px;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 16px;
    margin-top: 8px;
    color: ${colors.blackLight};

`
export default Input;