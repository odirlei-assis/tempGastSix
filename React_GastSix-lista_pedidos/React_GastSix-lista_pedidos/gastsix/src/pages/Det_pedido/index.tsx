import "./style.css";

//axios
import api from "../../utils/api";

//Hook
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

//Componentes
import CardProduto from "../../componentes/CardProduto";

function Det_Pedido() {
  const navigate = useNavigate();
  const { idPedido } = useParams();
  const [listaProdutos, setListaProdutos] = useState<any>();
  const [pedido, setPedido] = useState<any>();

  // const [DataFinal, setDataFinal] = useState<string>("");
  // const [porpedidos, setPorPedido] = useState<string>("");

  function PegarProdutos() {
    var listaPedidos = JSON.parse(localStorage.getItem("ListaPedidos")!);

    for (let index = 0; index < listaPedidos.length; index++) {
      const element = listaPedidos[index];
      if (element.id_pedido == idPedido) {
        setPedido(element)
      }
    }
  }

  async function ConcluirPedido() {
    var listaPedidos = JSON.parse(localStorage.getItem("ListaPedidos")!);

    for (let index = 0; index < listaPedidos.length; index++) {
      const pedido = listaPedidos[index];
      if (pedido.id_pedido == idPedido) {
        setPedido(pedido)

        const todosSeparados = pedido.itens_pedido.every((item: any) => item.separado);
        
        if (todosSeparados) {
          pedido.concluido = true
          await localStorage.setItem("ListaPedidos", JSON.stringify(listaPedidos));

          alert("Pedido concluído.");
          navigate("/visualizarPedido");
        }else{
          alert("O pedido não pode ser concluído. Nem todos os itens foram separados.");
        }
        break;
      }
    }
  }

  // function ListarProdutos() {

  //   api.get("pedido/" + idPedido)
  //     .then((response) => {
  //       setListaProdutos(response.data.pedidoProduto)
  //       console.log("Pedido");
  //       console.log(response.data)
  //     })
  //     .catch((error) => console.log(error)
  //     )
  // }

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
    // ListarProdutos();
    PegarProdutos();
  }, [])


  return (
    <main className="banner">
      <div>
        <span className="id_pedido">Id pedido: {idPedido}</span>
      </div>
      <ul className="det_pedido_ul">
        {
          pedido == null ? "" : pedido.itens_pedido.map((item: any, index: any) => {
            return <li key={index}>
              <CardProduto
                item={item}
              // descricao={item.produto.descricao}
              // quantidade_produto={item.quantidade_produto}
              // codigoSAP={item.produto.codigoSAP}
              // separado={item.produto.separado}
              />
            </li>
          })
        }
      </ul>
      <input onClick={() => ConcluirPedido()} id="botao_concluir" className="det_pedido_btn" type="button" value="Concluir" />
    </main>
  )
}

export default Det_Pedido;