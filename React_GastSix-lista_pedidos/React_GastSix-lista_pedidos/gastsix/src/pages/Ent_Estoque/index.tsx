import { useEffect } from "react";
import "./style.css"

function Ent_Estoque() {

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

  useEffect(() => {
    //executa uma ação após o componente ser recarregado
    recolherMenu();
  }, [])

  return (
    <main className="banner__entrada">
  {/*indica o conteudo principal*/}
  <section className="section__formulario-entrada">
    {/*tag section indica uma secao*/}
    <form className="formulario-central">
      <div className="div__alinhamento_campos">
        <label htmlFor="input_id">Id:</label>
        <input type="text" name="input_id" id="" />
      </div>
      <div className="div__alinhamento_campos">
        <label htmlFor="input_item">Item:</label>
        <input type="text" name="input_item" id="" />
      </div>
      <div className="div__alinhamento_campos">
        <label htmlFor="input_quantidade">Quantidade:</label>
        <input type="number" name="input_quantidade" id="" />
      </div>
      <div className="div__alinhamento_campos">
        <label htmlFor="input_partnumber">Part number:</label>
        <input type="email" name="input_number" id="" />
      </div>
      <div className="div__alinhamento_funcao_data"></div>
      <div className="div__alinhamento_campos">
        <label htmlFor="input_posicao">Posição:</label>
        <input type="text" name="input_posicao" id="" />
      </div>
      <div className="div__alinhamento_campos">
        <label htmlFor="input_deposito">Deposito:</label>
        <input type="text" name="input_deposito" id="" />
      </div>
      <div className="div_alinhamento_duplo">
        <div className="div__alinhamento_altura_rua">
          <label htmlFor="input_altura">Altura:</label>
          <input type="text" name="input_altura" id="" />
        </div>
        <div className="div__alinhamento_altura_rua">
          <label htmlFor="input_rua">Rua:</label>
          <input type="text" name="input_rua" id="" />
        </div>
      </div>
      <div className="div_alinhamento_duplo">
        <div className="div__alinhamento_altura_rua">
          <label htmlFor="input_codsap">Cod sap:</label>
          <input type="text" name="input_codsap" id="" />
        </div>
        <div className="div__alinhamento_altura_rua">
          <label htmlFor="input_coluna">Coluna:</label>
          <input type="text" name="input_coluna" id="" />
        </div>
      </div>
      <button className="botao_inserir" type="submit">
        Inserir
      </button>
    </form>
  </section>
</main>

  )
}

export default Ent_Estoque;