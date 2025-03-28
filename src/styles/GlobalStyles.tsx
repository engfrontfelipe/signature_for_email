import { createGlobalStyle } from 'styled-components';
import { objClient } from './variables';
const GlobalStyles = createGlobalStyle`
    *{
        font-family: Roboto, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;


    };
    html{
        background-image: url(${objClient.imgBackground});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 85vh;
        overflow-y: hidden;
        z-index: 0;
        object-fit: cover;
        
        &:before{
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #0000007b;
            z-index: -1;
        }
    }

    .aligLogo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-bottom: 20px;
    animation: slideFromRight 1.5s ease-out forwards; /* Animação aplicada diretamente */
}

    @keyframes slideFromRight {
        from {
            transform: translateX(100%); /* Começa fora da tela à direita */
            opacity: 0;
        }
        to {
            transform: translateX(0); /* Termina na posição normal */
            opacity: 1;
        }
    }

    .swal-signature-container {
    text-align: left !important; 
  }
`;

export default GlobalStyles;


