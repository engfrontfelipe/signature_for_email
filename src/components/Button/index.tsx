import styled from "styled-components";
import { colors } from "../../styles/variables";

export const Button = styled.button`

    width: 70%;
    padding: 8px;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 16px;
    margin-top: 8px;
    background: ${colors.orange}; // Cor sólida inicial
    color: ${colors.white};
    cursor: pointer;
    transition: 1s; // Transição suave para o background: ;
    font-weight: bold;
    
    &:hover {
    background: linear-gradient(to right, ${colors.orange}, ${colors.bluelight}); // Cor degradê ao passar o mouse
    transition: 1s; // Transição suave para o background: ;

}
`;
