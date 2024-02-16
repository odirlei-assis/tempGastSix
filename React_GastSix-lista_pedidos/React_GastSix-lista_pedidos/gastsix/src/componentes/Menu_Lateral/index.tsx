import { Link, useLocation } from "react-router-dom";
import "./style.css"
import menu_inferior from "../../assets/img/menu_inferior.png"
import menu_superior from "../../assets/img/menu_superior.png"
import { useEffect } from "react";


function MenuLateral() {
  const location = useLocation();

  function mostrarMenu() {

    let menu: any = document.getElementById("menu_lateral");
    let menu_barras: any = document.getElementById("menu_barras");

    if (window.getComputedStyle(menu).display == "none") {
      menu.style.display = "flex"
      menu_barras.setAttribute("aria-label", "fechar menu")
      menu_barras.setAttribute("aria-expandede", "true")
    } else {
      menu.style.display = "none"
      menu_barras.setAttribute("aria-label", "abrir menu")
      menu_barras.setAttribute("aria-expandede", "false")
    }
  }

  // CADASTRO

  function mostrar_menu_cadastro() {
    let menu_cadastros: any = document.getElementById("menu_lateral_cadastro");
    let menu_cadastro_aberto: any = document.getElementById("menu_cadastro_aberto");
    let menu_pedidos: any = document.getElementById("menu_lateral_pedidos");
    let menu_estoque: any = document.getElementById("menu_lateral_estoque");
    let menu_relatorios: any = document.getElementById("menu_lateral_relatorios");

    if (window.getComputedStyle(menu_cadastros).display == "none") {
      menu_cadastros.style.display = "flex"
      menu_estoque.style.display = "none"
      menu_pedidos.style.display = "none"
      menu_relatorios.style.display = "none"
      menu_cadastro_aberto.setAttribute("aria-label", "fechar menu")
      menu_cadastro_aberto.setAttribute("aria-expandede", "true")

    } else {
      menu_cadastros.style.display = "none"
      menu_cadastro_aberto.setAttribute("aria-label", "abrir menu")
      menu_cadastro_aberto.setAttribute("aria-expandede", "false")
    }
  }

  // ESTOQUE
  function mostrar_menu_estoque() {
    let menu_pedidos: any = document.getElementById("menu_lateral_pedidos");
    let menu_estoque: any = document.getElementById("menu_lateral_estoque");
    let menu_relatorios: any = document.getElementById("menu_lateral_relatorios");
    let menu_cadastros: any = document.getElementById("menu_lateral_cadastro");
    let menu_estoque_aberto: any = document.getElementById("menu_estoque_aberto");

    if (window.getComputedStyle(menu_estoque).display == "none") {
      menu_cadastros.style.display = "none"
      menu_estoque.style.display = "flex"
      menu_pedidos.style.display = "none"
      menu_relatorios.style.display = "none"
      menu_estoque_aberto.setAttribute("aria-label", "fechar menu")
      menu_estoque_aberto.setAttribute("aria-expandede", "true")
    } else {
      menu_estoque.style.display = "none"
      menu_estoque_aberto.setAttribute("aria-label", "abrir menu")
      menu_estoque_aberto.setAttribute("aria-expandede", "false")
    }
  }

  // PEDIDOS

  function mostrar_menu_pedidos() {
    let menu_pedidos: any = document.getElementById("menu_lateral_pedidos");
    let menu_estoque: any = document.getElementById("menu_lateral_estoque");
    let menu_relatorios: any = document.getElementById("menu_lateral_relatorios");
    let menu_cadastros: any = document.getElementById("menu_lateral_cadastro");
    let menu_pedidos_aberto: any = document.getElementById("menu_pedidos_aberto");

    if (window.getComputedStyle(menu_pedidos).display == "none") {
      menu_cadastros.style.display = "none"
      menu_estoque.style.display = "none"
      menu_pedidos.style.display = "flex"
      menu_relatorios.style.display = "none"
      menu_pedidos_aberto.setAttribute("aria-label", "fechar menu")
      menu_pedidos_aberto.setAttribute("aria-expandede", "true")
    } else {
      menu_pedidos.style.display = "none"
      menu_pedidos_aberto.setAttribute("aria-label", "abrir menu")
      menu_pedidos_aberto.setAttribute("aria-expandede", "false")
    }
  }

  // RELATORIOS

  function mostrar_menu_relatorios() {
    let menu_pedidos: any = document.getElementById("menu_lateral_pedidos");
    let menu_estoque: any = document.getElementById("menu_lateral_estoque");
    let menu_relatorios: any = document.getElementById("menu_lateral_relatorios");
    let menu_cadastros: any = document.getElementById("menu_lateral_cadastro");
    let menu_relatorios_aberto: any = document.getElementById("menu_relatorios_aberto");

    if (window.getComputedStyle(menu_relatorios).display == "none") {
      menu_cadastros.style.display = "none"
      menu_estoque.style.display = "none"
      menu_pedidos.style.display = "none"
      menu_relatorios.style.display = "flex"
      menu_relatorios_aberto.setAttribute("aria-label", "fechar menu")
      menu_relatorios_aberto.setAttribute("aria-expandede", "true")
    } else {
      menu_relatorios.style.display = "none"
      menu_relatorios_aberto.setAttribute("aria-label", "abrir menu")
      menu_relatorios_aberto.setAttribute("aria-expandede", "false")
    }
  }


  return (
    <>
      {
        location.pathname !== "/"
          ? <>
            <aside className="posiciomaneto_menu">
              <Link to={"#"}
                id="menu_barras"
                aria-label="abrir menu"
                aria-controls="menu_lateral"
                aria-expanded="false"
                aria-haspopup="true"
                className="menu_barras"
                onClick={mostrarMenu}
              >
                <svg
                  width={170}
                  height={90}
                  viewBox="0 0 170 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={85} cy={45} r={44} stroke="white" strokeWidth={2} />
                  <line y1={44} x2={170} y2={44} stroke="white" strokeWidth={2} />
                  <line
                    x1="85.7107"
                    y1="15.9578"
                    x2="71.7107"
                    y2="30.0999"
                    stroke="white"
                    strokeWidth={2}
                  />
                  <line
                    x1="99.0473"
                    y1="30.2158"
                    x2="84.5387"
                    y2="15.7072"
                    stroke="white"
                    strokeWidth={2}
                  />
                  <line
                    x1="85.0437"
                    y1="73.5508"
                    x2="99.0437"
                    y2="59.4087"
                    stroke="white"
                    strokeWidth={2}
                  />
                  <line
                    x1="71.7071"
                    y1="59.2929"
                    x2="86.2157"
                    y2="73.8015"
                    stroke="white"
                    strokeWidth={2}
                  />
                </svg>
              </Link>
              <nav id="menu_lateral" className="menu_lateral">
                <a href="">
                  {" "}
                  <img src={menu_superior} alt="" />
                </a>
                <a
                  id="menu_cadastro_aberto"
                  aria-label="abrir menu"
                  aria-controls="menu_lateral_cadastro"
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="menu_cadastro_aberto"
                  href="#"
                  onClick={mostrar_menu_cadastro}
                >
                  cadastros &gt;{" "}
                </a>
                <hr />
                <a
                  id="menu_estoque_aberto"
                  aria-label="abrir menu"
                  aria-controls="menu_lateral_estoque"
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="menu_estoque_aberto"
                  href="#"
                  onClick={mostrar_menu_estoque}
                >
                  estoque &gt;{" "}
                </a>
                <hr />
                <a
                  id="menu_pedido_aberto"
                  aria-label="abrir menu"
                  aria-controls="menu_lateral_pedidos"
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="menu_pedido_aberto"
                  href="#"
                  onClick={mostrar_menu_pedidos}
                >
                  pedidos &gt;
                </a>
                <hr />
                <a
                  id="menu_relatorios_aberto"
                  aria-label="abrir menu"
                  aria-controls="menu_lateral_relatorios"
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="menu_relatorios_aberto"
                  href="#"
                  onClick={mostrar_menu_relatorios}
                >
                  relatórios &gt;
                </a>
                <hr />
                <Link to={"/"}>sair</Link>
                <a href="">
                  {" "}
                  <img src={menu_inferior} alt="" />
                </a>

              </nav>
            </aside>
            {/* MENU CADASTROS */}
            <aside className="posiciomaneto_menu_cadastro">
              <nav id="menu_lateral_cadastro" className="menu_lateral_cadastro">
                <Link to={"/cadastrousuario"}>usuários</Link>
                <hr />
                <Link to={"/cadastroProduto"}>produtos</Link>
                <hr />
                <Link to={"/cadastroDispositivo"}>dispositivos</Link>
                <hr />
                <Link to={"/cadastroFornecedores"}>fornecedores</Link>
              </nav>
            </aside>
            {/* MENU  ESTOQUE */}
            <aside className="posiciomaneto_menu_estoque">
              <nav id="menu_lateral_estoque" className="menu_lateral_estoque">
                <Link to={"/consultaEstoque"}>consulta</Link>
                <hr />
                <Link to={"/entradaEstoque"}>entrada</Link>
                <hr />
                <Link to={"/ajusteEstoque"}>ajustes</Link>
              </nav>
            </aside>
            {/* MENU  PEDIDOS */}
            <aside className="posiciomaneto_menu_pedidos">
              <nav id="menu_lateral_pedidos" className="menu_lateral_pedidos">
                <Link to={"/importarPedido"}>importar</Link>
                <hr />
                <Link to={"/lancarPedido"}>lancar</Link>
                <hr />
                <Link to={"/visualizarPedido"}>Visualizar</Link>
                <hr/>
                <Link to={"/detalhesPedido"}>Detalhes</Link>
              </nav>
            </aside>
            {/* MENU  RELATORIO */}
            <aside className="posiciomaneto_menu_relatorios">
              <nav id="menu_lateral_relatorios" className="menu_lateral_relatorios">
                <Link to={"/relatorioMovimentacao"}>movimentação</Link>
                <hr />
                <Link to={"/relatorioOperadores"}>operadores</Link>
                <hr />
                <Link to={"/relatorioEstoque"}>estoque</Link>

              </nav>
            </aside>
          </>
          : ""
      }

    </>
  )

}
export default MenuLateral;