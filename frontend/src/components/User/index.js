import React, { Component } from 'react';

import Main from '../template/Main';

const headerProps = {
  icon: 'user',
  title: 'Usuários',
  subtitle: 'Cadastro de Usuários: Listar, Incluir, Alterar e Excluir'
}

export default class User extends Component {
  render() {
    return (
      <Main {...headerProps}>
        Cadastro
      </Main>
    );
  }
}