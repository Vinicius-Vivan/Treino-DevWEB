// src/components/Form.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
`;

const Label = styled.label`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 12px;
  font-size: 1rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }
    alert(`Conta criada para ${formData.name}!`);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Label>Nome:</Label>
      <Input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <Label>E-mail:</Label>
      <Input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <Label>Senha:</Label>
      <Input type="password" name="password" value={formData.password} onChange={handleChange} required />

      <Label>Confirmar Senha:</Label>
      <Input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />

      <Button type="submit">Criar Conta</Button>
    </FormWrapper>
  );
};

export default Form;
