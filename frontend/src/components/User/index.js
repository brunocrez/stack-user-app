import React, { Component } from 'react';
import axios from 'axios';

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
  
  constructor(props) {
    super(props);
    this.clear = this.clear.bind(this);
    this.save = this.save.bind(this);
  }

  state = { ...initialState };

  componentDidMount() {
    this.refresh();
  }

  refresh() {
    axios
      .get(BASE_URL)
      .then(res => this.setState({ list: res.data }));
  }

  clear() {
    this.setState({ user: initialState.user });
  }

  save() {
    const user = this.state.user;
    const currentAction = user.id ? 'put' : 'post';
    const url = user.id ? `${BASE_URL}/${user.id}` : BASE_URL;

    axios[currentAction](url, user)
      .then(res => {
        this.setState({ user: initialState.user });
        this.refresh();
      })
  }

  updateField(e) {
    const user = { ...this.state.user };
    user[e.target.name] = e.target.value;
    this.setState({ user });
  }

  loadUser(user) {
    this.setState({ user });
  }

  removeUser(user) {
    axios
      .delete(`${BASE_URL}/${user.id}`)
      .then(() => this.refresh())
  }

  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.user.name}
                onChange={e => this.updateField(e)}
                placeholder="Digite o Nome" />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={this.state.user.email}
                onChange={e => this.updateField(e)}
                placeholder="Digite o E-mail" />
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button
              className="btn btn-primary"
              onClick={this.save}>
              Salvar
            </button>
            <button
              className="btn btn-secondary ml-2"
              onClick={this.clear}>
              Cancelar
            </button>
          </div>
        </div>      
      </div>
    );
  }

  renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }

  renderRows() {
    return this.state.list.map(el => (
      <tr key={el.id}>
        <td>{el.name}</td>
        <td>{el.email}</td>
        <td>
          <button
            className="btn btn-warning mr-1"
            onClick={() => this.loadUser(el)}>
            <i className="fa fa-pencil"></i>
          </button>
          <button
            className="btn btn-danger ml-1"
            onClick={() => this.removeUser(el)}>
            <i className="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <Main {...headerProps}>
        {this.renderForm()}
        {this.renderTable()}
      </Main>
    );
  }
}