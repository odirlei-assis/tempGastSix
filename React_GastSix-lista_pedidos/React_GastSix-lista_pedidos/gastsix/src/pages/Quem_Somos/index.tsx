//estilizacao
import "./style.css";

//imagens
import imgLOGO from "../../assets/img/LOGO.png";
import { useEffect } from "react";

function Quem_Somos() {

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
    <main className="banner">
  {/*indica o conteudo principal*/}
  <section className="section_formulario">
    {/*tag section indica uma secao*/}
    <div className="div_quemsomos">
      <div className="alinhamento_quemsomos">
        <h3>Quem somos</h3>
      </div>
      <div className="alinhamento_logo_texto">
        <div className="alinhamento_central">
          <img src={imgLOGO} alt="" />
        </div>
        <div className="alinhamento_texto">
          <p>
            A GastSix (ou G6) é uma empresa que uniu alunos do SENAI Informática
            e chegou com o intuito de otimizar a operação da montadora
            Volkswagen.
          </p>
          <p>
            A ideia do nome veio pela referência do Grupo 6 (com os integrantes
            Cícero, Edgard, Emily, Felipe, Joy, Luciane).
          </p>
          <p>
            “Gast” em alemão, em sua tradução é “cliente” ou “convidado”. O que
            representa bem a ideia do projeto. Somos um grupo do Senai convidado
            pela Fundação Grupo Volkswagen para esse projeto acontecer.
          </p>
          <p>6 pessoas no grupo dedicadas ao procedimento do projeto.</p>
        </div>
      </div>
    </div>
  </section>
</main>
  );
}

export default Quem_Somos;
