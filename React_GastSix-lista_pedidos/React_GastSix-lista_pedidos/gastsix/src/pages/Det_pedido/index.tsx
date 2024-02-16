import "./style.css";

//axios
import api from "../../utils/api";

//Hook
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

//Componentes
import CardProduto from "../../componentes/CardProduto";

function Det_Pedido() {
  const [listaProdutos, setListaProdutos] = useState<any>();
  // const [DataFinal, setDataFinal] = useState<string>("");
  // const [porpedidos, setPorPedido] = useState<string>("");

  const { idPedido } = useParams();


  function ListarProdutos() {

    //consumo api - lista pedidoproduto
    // api.get("pedido/" + idPedido)
    api.get("pedido/" + idPedido)
      .then((response) => {
        setListaProdutos(response.data.pedidoProduto)
        console.log("Pedido");
        console.log(response.data)
      })
      .catch((error) => console.log(error)
      )
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

  useEffect(() => {
    //executa uma ação após o componente ser recarregado
    recolherMenu();
    ListarProdutos();
  }, [])


  return (
    <main className="banner">
      <ul>
        {/* {
          listaProdutos.map((produto: any, index) => {
            return <li key={index}>
              <CardProduto
                id={produto.id_pedido}
                quantidade={produto.quantidade_produto}
              />
            </li>
          })
        } */}
      </ul>
    </main>
  )
}

export default Det_Pedido;