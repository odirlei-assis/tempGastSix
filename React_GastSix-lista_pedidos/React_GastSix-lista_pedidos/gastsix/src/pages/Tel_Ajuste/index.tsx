import { useEffect } from "react";
import "./style.css"

import { useState} from "react";

function Tel_Ajuste() {

  const [codigo, setCodigo] = useState<string>("");
  const [ajustar, setAjustarQuantidade] = useState<string>("");

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
    <main className="banner__ajuste">
  {/*indica o conteudo principal*/}
  <section className="aj_section__formulario">
  {/*tag section indica uma secao*/}
  <form className="aj_formulario-central">
    <div className="aj_div__alinhamento_campos">
      <label htmlFor="input__codigo">Codigo:</label>
      <input 
      type="text" 
      name="input__codigo" 
      id=""
      onChange={(e) => setCodigo(e.target.value)}
      required
      />
    </div>
    <button className="aj_botao" type="submit">
      Buscar
    </button>
  </form>
  <div className="aj_div__alinhamento_campos_quantidade">
    Quantidade Atual:
    <table className="aj_section__formulario_table">
      <tbody>
        <tr className="aj_tr">
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
        </tr>
        <tr>
          <td>5NN839015A</td>
          <td>Fechadura elétrica de porta</td>
          <td>100</td>
        </tr>
        <tr>
          <td>8X0831403E</td>
          <td>Dobradiça de porta</td>
          <td>50</td>
        </tr>
      </tbody>
    </table>
  </div>
  <form className="aj_formulario-central" action="">
    <div className="aj_div__alinhamento_campos">
      <label
        className="aj_ajustar_quantidade"
        htmlFor="input__ajustar_quantidade"
      >
        Ajustar quantidade:
      </label>
      <input 
      type="text" 
      name="input__ajustar quantidade" 
      id=""
      onChange={(e) => setAjustarQuantidade(e.target.value)}
      required 
      />
    </div>
    <button className="aj_botao" type="submit">
      Inserir
    </button>
  </form>
</section>

</main>
  )
}

export default Tel_Ajuste;