import { useEffect } from "react";
import "./style.css"

//hook
import { useState } from "react";


function Imp_Pedido() {

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
  const [selecionararquivo, setSelecionarArquivo] = useState<string>("");

  return (
    <main className="banner__imppedido">
  {/*indica o conteudo principal*/}
  <section className="section_formulario">
  {/*tag section indica uma secao*/}
  <form>
    <div className="div_alinhamento_campos">
      <label htmlFor="selecior_arquivo">Selecionar Arquivo:</label>
      <input 
      type="text" 
      name="selecior_arquivo" 
      id=""
      onChange={(e) => setSelecionarArquivo(e.target.value)}
      required 
      />
    </div>
    <div className="div_alinhamento_botao_importar">
      <button className="botao_importar" type="submit">
        Importar
      </button>
    </div>
  </form>
</section>

</main>

  )
}

export default Imp_Pedido;