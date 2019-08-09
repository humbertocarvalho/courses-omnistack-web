import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import './Login.css';
import api from '../services/api';
// import { Container } from './styles';

export default function Login({ history }) {
  const [username, setUsername] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post('/devs', {
      username
    });
    console.log(response);

    const { _id } = response.data;

    history.push(`dev/${_id}`);
  }

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <img src={logo} alt='Tindev' />
        <input
          placeholder='Digite seu usuário do Github'
          value={username}
          onChange={e => {
            setUsername(e.target.value);
          }}
        />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}
