import Main from '../template/Main';

const Home = (props) => (
  <Main
    icon="home"
    title="Início"
    subtitle="Gerenciamento de Usuários utilizando React">
    <div className="display-6">Bem-vindo!</div>
    <hr />
    <p className="mb-0">
      Sistema de cadastro de usuários utilizando React.
    </p>
  </Main>
);

export default Home;