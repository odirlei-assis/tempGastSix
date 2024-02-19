//estilizacao
import "./style.css";

import { Link } from "react-router-dom";

//imagens
import imgLOGO from "../../assets/img/LOGO.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function Login() {
  const navigate = useNavigate();
  const [listaUsuarios, setListaUsuarios] = useState<any[]>([]);
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  async function CriarUsuarios() {
    if (localStorage.getItem("ListaUsuarios") == null) {
      var listaUsuarios = [
        {
          "matricula": "061",
          "nome": "Usuario 1",
          "email": "usuario1@email.com",
          "senha": "123",
          "funcao": "ADMIN",
          "setor": "A",
        },{
          "matricula": "092",
          "nome": "Usuario 2",
          "email": "usuario2@email.com",
          "senha": "123",
          "funcao": "SUPERVISOR",
          "setor": "A",
        },{
          "matricula": "114",
          "nome": "Usuario 3",
          "email": "usuario3@email.com",
          "senha": "123",
          "funcao": "OPERADOR",
          "setor": "A",
        },{
          "matricula": "132",
          "nome": "Usuario 4",
          "email": "usuario4@email.com",
          "senha": "123",
          "funcao": "OPERADOR",
          "setor": "B",
        },{
          "matricula": "159",
          "nome": "Usuario 5",
          "email": "usuario5@email.com",
          "senha": "123",
          "funcao": "OPERADOR",
          "setor": "C",
        }
      ]

      await localStorage.setItem("ListaUsuarios", JSON.stringify(listaUsuarios))
    }
    await ListarUsuarios();
  }

  async function ListarUsuarios() {
    await setListaUsuarios(JSON.parse(localStorage.getItem("ListaUsuarios")!))
  }

  function Logar() {
    const usuarioLogado = listaUsuarios.find(usuario => usuario.email == email && usuario.senha == senha);
    if (usuarioLogado) {      
      alert("Login bem-sucedido. Bem-vindo, " + usuarioLogado.nome);
      navigate("/loginHome");
    }else{
      alert("Usuário não encontrado ou senha incorreta");
    }
  }

  useEffect(() => {
    CriarUsuarios();
  }, []);

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
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="senha">
                <label htmlFor="senha">Senha:</label>
                <input type="password" id="password" onChange={(e) => setSenha(e.target.value)}/>
              </div>
            </div>
            <button onClick={() => Logar()}>
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