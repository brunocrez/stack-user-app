import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Main from '../template/Main';

import { BASE_URL } from '../../URIs';

const headerProps = {
  icon: 'user',
  title: 'Usuários',
  subtitle: 'Cadastro de Usuários: Listar, Incluir, Alterar e Excluir'
}

const User = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    refresh();
  }, [])

  function refresh() {
    axios
      .get(BASE_URL)
      .then(res => setList(res.data));
  }

  function clear() {
    setName('');
    setEmail('');
  }

  function saveUser() {
    const user = { name, email };
    const currentAction = user.id ? 'put' : 'post';
    const url = user.id ? `${BASE_URL}/${user.id}` : BASE_URL;

    axios[currentAction](url, user)
      .then(() => {
        clear();
        refresh();
      })
  }

  function loadUser(user) {
    setName(user.name);
    setEmail(user.email);
  }

  function removeUser(user) {
    axios
      .delete(`${BASE_URL}/${user.id}`)
      .then(() => refresh())
  }

  return (
    <Main {...headerProps}>
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Digite o Nome" />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Digite o E-mail" />
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button
              className="btn btn-primary"
              onClick={saveUser}>
              Salvar
            </button>
            <button
              className="btn btn-secondary ml-2"
              onClick={clear}>
              Cancelar
            </button>
          </div>
        </div>      
      </div>

      <table className="table mt-4">
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {list.map(el => (
            <tr key={el.id}>
              <td>{el.name}</td>
              <td>{el.email}</td>
              <td>
                <button
                  className="btn btn-warning mr-1"
                  onClick={() => loadUser(el)}>
                  <i className="fa fa-pencil"></i>
                </button>
                <button
                  className="btn btn-danger ml-1"
                  onClick={() => removeUser(el)}>
                  <i className="fa fa-trash-o"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Main>
  );
}

export default User;