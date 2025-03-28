import styled from "styled-components";
import { colors } from "../../styles/variables";

export const Head = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: #000;
    text-align: center;
    margin-bottom: 20px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.548);
    background-color: ${colors.backgroundForm};
    width: 660px;
    max-width: 100%;
    margin: 0 auto;
    margin-top: 5vh;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    gap: 35px;
    animation: fadeIn 2s ease-in-out; /* Animação aplicada diretamente */

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    h1{
        font-size: 20px;
        font-weight: 700;
        margin-top: 5px;
        font-family: "scale-variable", sans-serif;
        color: #1b1b1b;
    }

    `
