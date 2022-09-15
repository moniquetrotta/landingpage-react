import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h3>landing.page</h3>
            </div>
            <div className="item-menu">
              <a href="#" className="" id="">
                Login
              </a>
            </div>
          </div>
          <div className="form">
            <h2>Entre em contato!</h2>
            <form>
              <div className="items-form">
                <input placeholder="Nome" type="text" className="text" />
                <input placeholder="Telefone" type="text" className="text" />
                <input placeholder="E-mail" type="text" className="text" />
                <input placeholder="Endereço" type="text" className="text" />
                <input type="submit" className="btn" id="btn" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="center">
          <div className="validation">
            <h3>Title</h3>
            <p>content content content content</p>
          </div>
          <div className="validation">
            <h3>Title</h3>
            <p>content content content content</p>
          </div>
          <div className="validation">
            <h3>Title</h3>
            <p>content content content content</p>
          </div>
          <div className="validation">
            <h3>Title</h3>
            <p>content content content content</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
