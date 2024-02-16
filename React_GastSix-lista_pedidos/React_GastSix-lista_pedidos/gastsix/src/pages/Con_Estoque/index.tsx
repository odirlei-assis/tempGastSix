import { useEffect } from "react";
import "./style.css"

//Hook
import { useState } from "react";


function Con_Estoque() {

  const [codigo, setDataInicial] = useState<string>("");
  const [ajustar, setDataFinal] = useState<string>("");

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
    <main className="banner__conestoque">
      {/*indica o conteudo principal*/}
      <section className="section_formulario">
        {/*tag section indica uma secao*/}
        <form className="formulario_central" id="form__central-id">
          <div className="div_alinhamento_funcao_data">
            <div className="div_alinhamento_data">
              <label htmlFor="input_dataadm">Data Inicial:</label>
              <input
                className="div_alinhamento_campos_data"
                type="date"
                name="input__dataadm"
                id=""
                onChange={(e) => setDataInicial(e.target.value)}
                required
              />
            </div>
            <div className="div_alinhamento_data">
              <label htmlFor="input_dataadm">Data Final:</label>
              <input
                className="div_alinhamento_campos_data"
                type="date"
                name="input__dataadm"
                id=""
                onChange={(e) => setDataFinal(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="div_botao_visualizar">
            <button className="botao_visualizar" type="submit">
              Visualizar
            </button>
          </div>
          <div className="aj_div__alinhamento_campos_quantidade">
            <table className="aj_section__formulario_table">
              <tbody>
                <tr className="aj_tr">
                  <th>Cod.material</th>
                  <th>Descrição material</th>
                  <th>Posição no estoque</th>
                </tr>
                <tr>
                  <td>83475t</td>
                  <td>Tampão</td>
                  <td>0137B1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="div_alinhamento_botao_cadastrar" id="of">
            <button className="botao_gerar" type="submit">
              Gerar xml
            </button>
            <button className="botao_gerar" type="submit">
              Gerar pdf
            </button>
          </div>
        </form>
      </section>

    </main>
  )
}

export default Con_Estoque;