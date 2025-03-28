import styled from "styled-components";
import { colors, objClient } from "../../styles/variables";

type Props = { 
    tipoBotao: "" | "submit"
} 

export const Button = styled.button<Props>`
    padding: 8px;
    border-radius: 10px;
    border: ${(props) => props.tipoBotao === "submit" ? "none" : "2px groove #E5843C" };
    outline: none;
    font-size: 16px;
    margin-top: 8px;
    background: ${(props) => props.tipoBotao === "submit" ? colors.orange : "transparent"}; 
    color: ${(props) => props.tipoBotao === "submit" ? colors.white : colors.orange};
    cursor: pointer;
    transition: 1s; // Transição suave para o background: ;
    font-weight: bold;
    width: ${(props) => props.tipoBotao === "submit" ? "90%" : "70%"};
    margin-top: 20px;
    
    &:hover {
    background: linear-gradient(to right, ${colors.orange}, ${colors.bluelight}); // Cor degradê ao passar o mouse
    transition: 0.1; // Transição suave para o background: ;
    color: aliceblue;

}
`;
