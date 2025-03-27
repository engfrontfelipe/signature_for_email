// src/components/Form.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Input from '../Input/index.tsx';
import Label from '../Label/index.tsx';
import { Select } from '../Input/index.tsx';
import { Button } from '../Button/index.tsx';
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
    if (valor.length <= 10) {
      return valor.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
      // Se o número de dígitos for maior que 10, limpa o campo
      setFormData(prev => ({
        ...prev,
        telefoneFixo: '', // Limpa o campo de telefone fixo
      }));
      // Exibir mensagem de erro com Swal
      Swal.fire({
        title: 'Erro!',
        text: 'Número de telefone fixo inválido. Deve ter no máximo 10 dígitos.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return ''; // Retorna vazio para o input
    }
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
                    <p style="margin:0; color:${objClient.color2}; font-family:'Open Sans', sans-serif; font-weight:450; letter-spacing:5px; text-transform:uppercase; font-size:15px;">${formData.departamento}</p>
                  </td>
                </tr>
                <tr><td height="3" bgcolor="#ffffff"></td></tr>
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0" width="421" style="border-collapse:collapse;">
                      <tr>
                        <td width="15"><svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill=${objClient.colorIcon}><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg></td>
                        <td width="115"><p style="margin:0; font-family:'Open Sans', sans-serif; font-size:12px; color:${objClient.color1};">${formData.telefoneFixo}</p></td>
                        <td width="15"><svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill=${objClient.colorIcon}><path d="M264-48q-29.7 0-50.85-21.15Q192-90.3 192-120v-720q0-29.7 21.15-50.85Q234.3-912 264-912h432q29.7 0 50.85 21.15Q768-869.7 768-840v720q0 29.7-21.15 50.85Q725.7-48 696-48H264Zm0-120v48h432v-48H264Zm0-72h432v-480H264v480Zm0-552h432v-48H264v48Zm0 0v-48 48Zm0 624v48-48Z"/></svg></td>
                        <td width="276"><p style="margin:0; font-family:'Open Sans', sans-serif; font-size:12px; color:${objClient.color1};">${formData.telefone}</p></td>
                      </tr>
                      <tr>
                        <td width="15"><svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill=${objClient.colorIcon}><path d="M168-192q-29.7 0-50.85-21.16Q96-234.32 96-264.04v-432.24Q96-726 117.15-747T168-768h624q29.7 0 50.85 21.16Q864-725.68 864-695.96v432.24Q864-234 842.85-213T792-192H168Zm312-240L168-611v347h624v-347L480-432Zm0-85 312-179H168l312 179Zm-312-94v-85 432-347Z"/></svg></td>
                        <td colspan="3"><p style="margin:0; font-family:'Open Sans', sans-serif; font-size:12px; color:${objClient.color1};">${formData.email}</p></td>
                      </tr>
                      <tr>
                        <td width="15"><svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill=${objClient.colorIcon}><path d="M802-107 696-213v81h-72v-204h204v72h-81l106 106-51 51ZM480-96q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 18-2 36t-5 36h-74q4-18 6.5-36t2.5-36q0-18-2.5-36t-6.5-36H622q2 17 2.5 35t.5 35q0 19-1 37t-2 37h-73q1-19 2-37.5t1-37.5q0-17-.5-34.5T549-552H411q-2 18-2.5 36t-.5 36q0 18 .5 36t2.5 36h93v72h-84q8 45 22 87.5t38 80.5q18 0 36.5-2t35.5-7v74q-17 5-35.5 6T480-96ZM177-408h161q-2-17-2.5-35t-.5-35q0-19 .5-37t2.5-37H177q-4 18-6.5 36t-2.5 36q0 18 2.5 36t6.5 36Zm27-216h143q6-40 16-79t26-76q-60 18-108 58t-77 97Zm186 443q-18-37-27.5-76T347-336H204q29 57 77 97t109 58Zm30-443h120q-8-44-21.5-86T480-789q-25 37-38 79t-22 86Zm193 0h143q-29-57-77-97t-108-58q16 37 26 76t16 79Z"/></svg></td>
                        <td colspan="3"><p style="margin:0; font-family:'Open Sans', sans-serif; font-size:12px; color:${objClient.color1};"><a href="http://asisolucoes.com.br" style="color:${objClient.color1}; text-decoration:none;">asisolucoes.com.br</a></p></td>
                      </tr>
                      <tr>
                        <td width="15"><svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill=${objClient.colorIcon}><path d="M480-96Q323.03-227.11 245.51-339.55 168-452 168-549q0-134 89-224.5T480-864q12 0 24 .5t24 2.31V-788q-11-2-23-3t-25-1q-103 0-171.5 69T240-549q0 71 60.5 161T480-191q119-107 179.5-197T720-549v-13.5q0-6.75-1-13.5h72q1 7 1 13.67V-549q0 97-77 209T480-96Zm.21-384Q510-480 531-501.21t21-51Q552-582 530.79-603t-51-21Q450-624 429-602.79t-21 51Q408-522 429.21-501t51 21Zm-.21-72Zm240-96h72v-120h120v-72H792v-120h-72v120H600v72h120v120Z"/></svg></td>
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
          maxLength={10}
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

      <Button type="submit">Gerar</Button>
    </FormStyle>
  );
};

export default Form;