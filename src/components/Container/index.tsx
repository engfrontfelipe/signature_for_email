import styled from "styled-components";
import { colors } from "../../styles/variables";

const Container = styled.div`
    max-width: 660px;
    width: 100%;
    padding: 20px;
    background-color: ${colors.backgroundForm};
    color: ${colors.orange};
    border-radius: 10px;
    height: 90%;
    margin: auto;
    margin-top: 20vh;
    z-index: 1; 
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.548);
    width: 100%;
  
`
export default Container;