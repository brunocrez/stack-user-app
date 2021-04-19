import './styles.css';

import Header from '../Header';

const Main = (props) => (
  <>
    <Header {...props} />
    <main className="content">
      Content
    </main>
  </>
);

export default Main;