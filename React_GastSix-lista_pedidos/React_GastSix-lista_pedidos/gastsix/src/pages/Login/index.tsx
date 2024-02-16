//estilizacao
import "./style.css";

import { Link } from "react-router-dom";

//imagens
import imgLOGO from "../../assets/img/LOGO.png";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  return (
    <div className="alinhamento_login">
      <main className="login">
        <div className="login_container">
          <div className="big_logo">
            <img src={imgLOGO} alt="logo gastsix" />
          </div>
          <div className="box_login">
            <h2>login</h2>
            <div className="preenchimentos">
              <div className="usuario">
                <label htmlFor="usuário">Usuário:</label>
                <input type="text" />
              </div>
              <div className="senha">
                <label htmlFor="senha">Senha:</label>
                <input type="password" id="password" />
              </div>
            </div>
            <button onClick={() => navigate("/loginHome")}>
              Entrar
            </button>
          </div>
        </div>
      </main>
      <footer>
        <Link to={"/quemsomos"}> quem somos </Link>
        <Link to={"/quemsomos"}> suporte </Link>
      </footer>
    </div>
  );
}

export default Login;