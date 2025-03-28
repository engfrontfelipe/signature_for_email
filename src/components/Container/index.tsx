import styled from "styled-components";
import { colors } from "../../styles/variables";

const Container = styled.div`
    max-width: 660px;
    width: 100%;
    padding: 40px;
    background-color: ${colors.backgroundForm};
    color: ${colors.orange};
    border-radius: 10px;
    height: 90%;
    margin: auto;
    margin-top: 20px;
    z-index: 1; 
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.548);
    width: 100%;
    animation: slideFromLeft 1s ease-out forwards; /* Animação aplicada diretamente */

    @keyframes slideFromLeft {
        from {
            transform: translateX(-100%); 
            opacity: 0;
        }
        to {
            transform: translateX(0); 
            opacity: 1;
        }
    }
  
`
export default Container;