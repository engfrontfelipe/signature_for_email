// src/components/Form.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Input from '../Input/index.tsx';
import Label from '../Label/index.tsx';
import { Select } from '../Input/index.tsx';
import { FormButton } from '../Button/index.tsx';
import FormStyle from './styles';
import { objClient } from '../../styles/variables.tsx';

const Form = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    telefoneFixo: '',
    email: '',
    departamento: '',
    endereco: '',
  });

const Reset = () => {
  setFormData({
    nome: '',
    telefone: '',
    telefoneFixo: '',
    email: '',
    departamento: '',
    endereco: '',
  });

}

  // Máscara para celular
  const mascaraCelular = (value) => {
    const valor = value.replace(/\D/g, ''); // Remove tudo que não é dígito
    if (valor.length <= 11) {
      return valor.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else {
      // Se o número de dígitos for maior que 11, limpa o campo
      setFormData(prev => ({
        ...prev,
        telefone: '', // Limpa o campo de telefone
      }));
      // Opcional: Exibir mensagem de erro com Swal
      Swal.fire({
        title: 'Erro!',
        text: 'Número de telefone inválido. Deve ter no máximo 11 dígitos.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return ''; // Retorna vazio para o input
    }
  };

  // Máscara para telefone fixo
  const mascaraFixo = (value) => {
    const valor = value.replace(/\D/g, '');
    return valor.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  // Atualiza o estado ao digitar
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    let formattedValue = value;

    if (id === 'telefone') {
      formattedValue = mascaraCelular(value);
    } else if (id === 'telefoneFixo') {
      formattedValue = mascaraFixo(value);
    }

    setFormData(prev => ({
      ...prev,
      [id]: formattedValue,
    }));
  };

  // Gera a assinatura e exibe no modal
  const handleSubmit = (e) => {
    e.preventDefault();

    // Mostra "Carregando..." enquanto processa
    Swal.fire({
      title: 'Gerando assinatura...',
      text: 'Aguarde um momento',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    setTimeout(() => {
      const signatureTemplate = `
        <table border="0" cellpadding="0" cellspacing="0" width="720" height="250" style="border-collapse:collapse;" bgcolor="#FFFFFF">
          <tr>
            <td width="20"></td>
            <td width="427" style="padding-right:20px;">
              <img src="${objClient.bg1}" width="427" height="250" style="display:block;">
            </td>
            <td width="421">
              <table cellpadding="0" cellspacing="0" width="421" style="border-collapse:collapse;">
                <tr>
                  <td valign="top" align="left">
                    <p style="margin:0; color:${objClient.color1}; font-family:'Open Sans', sans-serif; font-weight:650; text-transform:uppercase; font-size:25px;">${formData.nome}</p>
<p style="margin:0; color:#0762C8; font-family:'Open Sans', sans-serif; font-weight:450; letter-spacing:5px; text-transform:uppercase; font-size:15px;">${formData.departamento}</p>
                  </td>
                </tr>
                <tr><td height="3" bgcolor="#ffffff"></td></tr>
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0" width="421" style="border-collapse:collapse;">
                      <tr>
                        <td width="15"><img src="${objClient.iconPhone}" width="16px" height="16px" /></td>
                        <td width="115"><p style="margin:0; font-family:'Open Sans', sans-serif; font-size:12px; color:${objClient.color1};">${formData.telefoneFixo}</p></td>
                        <td width="15"><img src="${objClient.iconWpp}" width="16px" height="16px" /></td>
                        <td width="276"><p style="margin:0; font-family:'Open Sans', sans-serif; font-size:12px; color:${objClient.color1};">${formData.telefone}</p></td>
                      </tr>
                      <tr>
                        <td width="15"><img src="${objClient.iconMail}" width="16px" height="16px" /></td>
                        <td colspan="3"><p style="margin:0; font-family:'Open Sans', sans-serif; font-size:12px; color:${objClient.color1};">${formData.email}</p></td>
                      </tr>
                      <tr>
                        <td width="15"><img src="${objClient.iconSite}" width="16px" height="16px" /></td>
                        <td colspan="3"><p style="margin:0; font-family:'Open Sans', sans-serif; font-size:12px; color:${objClient.color1};"><a href="http://asisolucoes.com.br" style="color:${objClient.color1}; text-decoration:none;">asisolucoes.com.br</a></p></td>
                      </tr>
                      <tr>
                        <td width="15"><img src="${objClient.iconAddress}" width="16px" height="16px" /></td>
                        <td colspan="3"><p style="margin:0; font-family:'Open Sans', sans-serif; font-size:12px; color:${objClient.color1};">${formData.endereco}</p></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
            <td width="69"><img src="${objClient.bg2}" width="69" height="250"></td>
            <td width="21"></td>
          </tr>
        </table>
      `;

      // Fecha o "Carregando..." e abre o modal com a assinatura
      Swal.fire({
        title: 'Assinatura gerada com sucesso!',
        html: signatureTemplate,
        width: 800,
        showCancelButton: true,
        confirmButtonText: 'Copiar',
        confirmButtonColor: "#0762C8",
        cancelButtonText: 'Fechar',
        customClass: {
        htmlContainer: 'swal-signature-container', 
        },
      }).then((result) => {
        if (result.isConfirmed) {
          const blob = new Blob([signatureTemplate], { type: 'text/html' });
          const clipboardItem = new ClipboardItem({ 'text/html': blob });

          navigator.clipboard.write([clipboardItem])
            .then(() => {
              Swal.fire({
                title: 'Assinatura Copiada!',
                text: 'A assinatura foi copiada para a área de transferência.',
                icon: 'success',
                confirmButtonColor: "#0762C8"
              });
            })
            .catch(() => {
              Swal.fire({
                title: 'Erro!',
                text: 'Não foi possível copiar a assinatura.',
                icon: 'error',
              });
            });
        }
      });
    }, 3000);
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <Label htmlFor="nome">
        Nome:
        <Input
          type="text"
          placeholder="Felipe Maciel"
          id="nome"
          required
          value={formData.nome}
          onChange={handleInputChange}
        />
      </Label>

      <Label htmlFor="telefone">
        Telefone:
        <Input
          type="text"
          id="telefone"
          placeholder="Ex: (22) 99999-9999"
          required
          value={formData.telefone}
          onChange={handleInputChange}
          maxLength={12}
        />
      </Label>

      <Label htmlFor="telefoneFixo">
        Telefone Fixo:
        <Input
          type="text"
          placeholder="Ex: (22) 9999-9999"
          id="telefoneFixo"
          required
          value={formData.telefoneFixo}
          onChange={handleInputChange}
          maxLength={12}
        />
      </Label>

      <Label htmlFor="email">
        E-mail:
        <Input
          type="email"
          id="email"
          placeholder="exemplo@gmail.com"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
      </Label>

      <Label htmlFor="departamento">
        Departamento:
        <Select
          id="departamento"
          name="department"
          required
          value={formData.departamento}
          onChange={handleInputChange}
        >
          <option value="" disabled>Selecione</option>
          <option value="Diretoria">Diretoria</option>
          <option value="Gerência">Gerência</option>
          <option value="Supervisão">Supervisão</option>
          <option value="Administrativo">Administrativo</option>
          <option value="Comercial">Comercial</option>
          <option value="Comercial Técnico">Comercial Técnico</option>
          <option value="Vendas Balcão">Vendas Balcão</option>
          <option value="Compras">Compras</option>		
          <option value="Faturamento">Faturamento</option>
          <option value="Customer Solutions">Customer Solutions</option>
          <option value="Almoxarifado">Almoxarifado</option>
          <option value="Instrumentação">Instrumentação</option>
          <option value="Montagem">Montagem</option>
          <option value="QSMS">QSMS</option>
          <option value="Teste Hidrostático">Teste Hidrostático</option>
        </Select>
      </Label>

      <Label htmlFor="endereco">
        Unidade:
        <Select
          id="endereco"
          required
          value={formData.endereco}
          onChange={handleInputChange}
        >
          <option value="">Selecione</option>
          <option value="Av. Carlos Augusto Tinoco Garcia, 419, Riviera Fluminense, Macaé – RJ">Matriz Macaé-RJ</option>
        </Select>
      </Label>
      <FormButton tipoBotao='reset' onClick={Reset} type='reset'>Limpar Campos</FormButton>
      <FormButton tipoBotao='submit' type='submit'>Gerar</FormButton>
      
    </FormStyle>
  );
};

export default Form;