//estilizacao
import { useState } from "react";
import "./style.css";
import { useEffect } from "react";
import api from "../../utils/api";

//Hook

function Cad_Usuario() {
  const [nome, setNome] = useState<string>("");
  const [cpf, setCPF] = useState<string>("");
  const [matricula, setMatricula] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [dataadm, setDataAdm] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [confirmarsenha, setConfirmarSenha] = useState<string>("");
  const [funcao, setfuncao] = useState<string>("");


  function mascaraCPF(event: any) {
    // console.log(event.target.value);

    //remove todos os caracteres nao-alfanumericos
    let cpfValue = event.target.value.replace(/[^a-zA-z0-9]/g, "");

    //Aplica a mascara
    cpfValue = cpfValue.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    //atualiza o valor do campo CPF com a mascara aplicada
    setCPF(cpfValue);
  }

  function validarSenha() {

    if (senha !== confirmarsenha && confirmarsenha !== senha) {
      alert("Valor de senha e confirmar senha estao diferentes.Os valores devem ser iguais")
    }
    
  }

  function recolherMenu() {

    let menu: any = document.getElementById("menu_lateral");
    // let menu_barras: any = document.getElementById("menu_barras");
    let menu_relatorios: any = document.getElementById("menu_lateral_relatorios");
    // let menu_relatorios_aberto: any = document.getElementById("menu_relatorios_aberto");
    let menu_pedidos: any = document.getElementById("menu_lateral_pedidos");
    let menu_estoque: any = document.getElementById("menu_lateral_estoque");
    let menu_cadastros: any = document.getElementById("menu_lateral_cadastro");
    // let menu_pedidos_aberto: any = document.getElementById("menu_pedidos_aberto");
    // let menu_estoque_aberto: any = document.getElementById("menu_estoque_aberto");

    menu.style.display = "none"
    // menu_barras.setAttribute("aria-label", "abrir menu")
    // menu_barras.setAttribute("aria-expandede", "false")
    menu_relatorios.style.display = "none"
    // menu_relatorios_aberto.setAttribute("aria-label", "abrir menu")
    // menu_relatorios_aberto.setAttribute("aria-expandede", "false")
    menu_pedidos.style.display = "none"
    // menu_pedidos_aberto.setAttribute("aria-label", "abrir menu")
    // menu_pedidos_aberto.setAttribute("aria-expandede", "false")
    menu_estoque.style.display = "none"
    // menu_estoque_aberto.setAttribute("aria-label", "abrir menu")
    // menu_estoque_aberto.setAttribute("aria-expandede", "false")
    menu_cadastros.style.display = "none"

  }

  function cadastrarUsuario(event : any){
    event.preventDefault(); 

    const objUsuario = {
     nome:nome,
     cpf:cpf,
     matricula:matricula,
     email:email,
     dataadm: dataadm,
     senha:senha,
     funcao:funcao

    };

    api.post('usuarios', objUsuario)
    .then((response)=>{
      alert("Cadastro usuario concluido com sucesso!");
    })
    .catch((error) => {
      if (error.response.status === 400){
        alert(error.response.data);
      }
      
    })
  }

  useEffect(() => {
    //executa uma ação após o componente ser recarregado
    recolherMenu();
  }, [])

  return (
    <main className="banner__usuario">
      {/*indica o conteudo principal*/}
      <section className="section__formulario-usuario">
        {/*tag section indica uma secao*/}
        <form className="formulario-central" onSubmit={cadastrarUsuario}>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__nome">Nome:</label>
            <input
              type="text"
              name="input__nome"
              id=""
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__cpf">CPF:</label>
            <input
              type="text"
              name="input__cpf"
              id=""
              value={cpf}
              minLength={11}
              maxLength={11}
              onChange={mascaraCPF}
              required
            />

          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__matricula">Matricula:</label>
            <input
              type="text"
              name="input__matricula"
              id=""
              onChange={(e) => setMatricula(e.target.value)}
              required
            />

          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__E-mail">E-mail:</label>
            <input
              type="email"
              name="input__E-mail"
              id=""
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="div__alinhamento_funcao_data">
            <div className="div__alinhamento__funcao">
              <label htmlFor="">Função:</label>
              <select
               name="" 
               id=""
               onChange={(e) => setfuncao(e.target.value)}>
                <option disabled={true} selected={true} value="">
                  Selecione
                </option>
                <option value="ADMIN">Administrador</option>
                <option value="OPERADOR">Operador</option>
                <option value="SUPERVISOR">Supervisor</option>
              </select>
            </div>
            <div className="div__alinhamento__data">
              <label htmlFor="input__dataadm">Data adm:</label>
              <input
                className="div__alinhamento_campos_data"
                type="date"
                name="input__dataadm"
                id=""
                onChange={(e) => setDataAdm(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__senha">Senha:</label>
            <input
              type="password"
              name="input__senha"
              id=""
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__confirmarsenha">Confirmar Senha:</label>
            <input
              type="password"
              name="input__confirmarsenha"
              id=""
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
              onBlur={validarSenha}
            />
          </div>
          <button className="botao_cadastrar" type="submit">
            Cadastrar
          </button>
        </form>
      </section>
    </main>

  )

}

export default Cad_Usuario;