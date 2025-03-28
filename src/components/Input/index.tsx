import styled from "styled-components";
import { colors } from "../../styles/variables";

const Input = styled.input`
    width: 90%;
    padding: 10px 0;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 16px;
    margin-top: 8px;
    text-align: center;

`

export const Select = styled.select`
    width: 90%;
    padding: 10px 0;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 16px;
    margin-top: 8px;
    color: ${colors.blackLight};
    text-align: center;

`
export default Input;