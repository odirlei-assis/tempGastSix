import { useEffect } from "react";
import "./style.css"

//Hook
import { useState } from "react";
import api from "../../utils/api";

function Cad_Produtos() {

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

  function cadastrarProduto(event:any) {
    event.preventDefault();

    const objProduto = {
      descricao: descricao,
      partnumber: partnumber,
      setor: setor,
      codigosap: codigosap
    };

    api.post('produtos', objProduto)
    .then((response) => {
      alert("Cadastro produto concluído com sucesso!");
    })
    .catch((error) => {
      if (error.response.status === 400) {
        alert(error.response.data);
      }

    })


  }

  useEffect(() => {
    //executa uma ação após o componente ser recarregado
    recolherMenu();
  }, [])
  
  const [descricao, setDescricao] = useState<string>("");
  const [partnumber, setPartnumber] = useState<string>("");
  const [setor, setSetor] = useState<string>("");
  // const [codigofornecedor, setCodigoFornecedor] = useState<string>("");
  const [codigosap, setCodigoSap] = useState<string>("");


  return (
    <main className="banner__produto">
      {/*indica o conteudo principal*/}
      <section className="section__formulario-produto">
        {/*tag section indica uma secao*/}
        <form className="formulario-central" onSubmit={cadastrarProduto}>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__descricao">Descrição:</label>
            <input
              type="text"
              name="input__discricao"
              id=""
              onChange={(e) => setDescricao(e.target.value)}
              required
            />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__part">Part Number:</label>
            <input
              type="text"
              name="input__pat"
              id=""
              onChange={(e) => setPartnumber(e.target.value)}
              required
            />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__codigoalt">Setor:</label>
            <input
              type="text"
              name="input__codigoalt"
              id=""
              onChange={(e) => setSetor(e.target.value)}
              required
            />
          </div>
          {/* <div className="div__alinhamento_campos">
            <label htmlFor="input__codigofor">Código Fornecedor:</label>
            <input
              type="text"
              name="input__codigofor"
              id=""
              onChange={(e) => setCodigoFornecedor(e.target.value)}
              required
            />
          </div> */}
          <div className="div__alinhamento_campos">
            <label htmlFor="input__codigosap">Código SAP:</label>
            <input
              type="text"
              name="input__codigosap"
              id=""
              onChange={(e) => setCodigoSap(e.target.value)}
              required
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

export default Cad_Produtos;