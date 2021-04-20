import React, { Component } from 'react';

import Main from '../template/Main';

import { BASE_URL } from '../../URIs';

const headerProps = {
  icon: 'user',
  title: 'Usuários',
  subtitle: 'Cadastro de Usuários: Listar, Incluir, Alterar e Excluir'
}

const initialState = {
  user: { name: '', email: '' },
  list: []
}

export default class User extends Component {

  state = { ...initialState };

  clear() {
    this.setState({ user: initialState.user });
  }

  save() {
    const user = this.state.user;
    const currentAction = user.id ? 'put' : 'post';
    const url = user.id ? `${BASE_URL}/${user.id}` : BASE_URL;

    axios[currentAction](url, user)
      .then(res => {
        const list = this.getListUpdated(res.data);
        this.setState({ user: initialState.user, list });
      })
  }

  getListUpdated(user) {
    const list = this.state.filter(e => e.id !== user.id);
    list.unshift(user);
    return list;
  }

  render() {
    return (
      <Main {...headerProps}>
        Cadastro
      </Main>
    );
  }
}