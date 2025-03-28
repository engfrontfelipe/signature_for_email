import styled from "styled-components";
import { colors, objClient } from "../../styles/variables";
type Props = { 
    tipoBotao: "reset" | "submit"
} 

export const FormButton = styled.button<Props>`
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
    transition: ease 1s; // Transição suave para o background: ;
    color: aliceblue;

}
`;

export const Button = styled.a`
    text-align: center;
    padding: 8px;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    margin-top: 8px;
    background: ${colors.orange};
    color: ${colors.white};
    font-weight: bold;
    width: 120px;
    margin-top: 20px;
    position: absolute;
    top: 10px;
    right: 50px;
    scale: 0.9;
    transition: ease 0.4s;
    text-decoration: none;
    animation: fadeIn 3s ease-in-out; /* Animação aplicada diretamente */

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    &:hover{
        background: linear-gradient(to right, ${colors.orange}, ${colors.bluelight}); // Cor degradê ao passar o mouse
        transition: ease 1s;


    }

    

`
