// src/App.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles.tsx';
import Container from './components/Container';
import Form from './components/Form/index.tsx';
import { Head } from './components/Head/index.tsx';
import { objClient } from './styles/variables.tsx';

import {Header, HeaderGrove} from './components/Header/index.tsx';
import { Button } from './components/Button/index.tsx';

// Estilo para a mensagem de incompatibilidade
const MobileWarning = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  z-index: 1000;
  font-family: 'Arial', sans-serif;
  font-size: 18px;
  color: #dc3545;
`;

function App() {
  const [isMobile, setIsMobile] = useState(false);

  // Função para verificar o tamanho da tela
  const checkScreenSize = () => {
    if (window.innerWidth < 560) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // Efeito para monitorar o tamanho da tela
  useEffect(() => {
    // Verifica o tamanho da tela ao carregar a página
    checkScreenSize();

    // Adiciona um listener para o evento de resize
    window.addEventListener('resize', checkScreenSize);

    // Remove o listener ao desmontar o componente
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Se for dispositivo móvel, exibe a mensagem de incompatibilidade
  if (isMobile) {
    return (
      <MobileWarning>
        Desculpe, este aplicativo não é compatível com dispositivos móveis. Por favor, acesse de um desktop ou tablet com largura de tela maior que 600px.
      </MobileWarning>
    );
  }

  // Renderiza o aplicativo normalmente se a tela for maior ou igual a 600px
  return (
    <>
      <GlobalStyles />
      <Head>
        <HeaderGrove src='https://assinaturas.grovehost.com.br/imagesClientes/hidropartesImg/TechnologyPreto.png' />
        <h1>Gerador de Assinaturas</h1>
      </Head>
      <Container>
        <div className="aligLogo">
          <Header src={objClient.logo} />
        </div>
        <Form />
      </Container>
      <Button href='https://grovetech.com.br/' target='blank' type='submit'>Acesse Grove Tech</Button>
    </>
  );
}

export default App;