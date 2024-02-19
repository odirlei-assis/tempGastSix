//estilizacao
import "./style.css"

//axios
import api from "../../utils/api";

//Hook
import { useState } from "react";
import { useEffect } from "react";


//Componentes
import CardPedido from "../../componentes/CardPedido";
import CardProduto from "../../componentes/CardProduto";

function Vis_Pedido() {
  const [listaPedidos, setListaPedidos] = useState<any[]>([]);
  const [listaProdutos, setListaProdutos] = useState<any[]>([]);
  // const [DataFinal, setDataFinal] = useState<string>("");
  // const [porpedidos, setPorPedido] = useState<string>("");

  // function ListarPedidos() {
  //   //consumo api - lista pedidos
  //   api.get("pedido")
  //     .then((response) => {
  //       setListaPedidos(response.data)
  //       console.log(response)
  //     })
  //     .catch((error) => console.log(error)
  //     )
  // }

  async function CriarPedidos() {
    if (localStorage.getItem("ListaPedidos") == null) {
      var lista = [
        {
          "id_pedido": "061d105d-c6e1-11ee-9c08-b445067b803e",
          "observacoes": "Pedido 1 Observações",
          "usuario_supervisor": "002",
          "setor": "A",
          "itens_pedido": [
            {
              "id": "0618a348-c6e1-11ee-9c08-b445067b803e",
              "produto": {
                "id": "0618a348-c6e1-11ee-9c08-b445067b803e",
                "descricao": "Produto A",
                "partnumber": "123456",
                "setor": "A",
                "codigoSAP": "SAP123"
              },
              "quantidade_produto": 10,
              "separado": false
            },
            {
              "id": "061a4df9-c6e1-11ee-9c08-b445067b803e",
              "produto": {
                "id": "061a4df9-c6e1-11ee-9c08-b445067b803e",
                "descricao": "Produto D",
                "partnumber": "901234",
                "setor": "A",
                "codigoSAP": "SAP901"
              },
              "quantidade_produto": 50,
              "separado": false
            },
            {
              "id": "061b4a90-c6e1-11ee-9c08-b445067b803e",
              "produto": {
                "id": "061b4a90-c6e1-11ee-9c08-b445067b803e",
                "descricao": "Produto G",
                "partnumber": "890123",
                "setor": "A",
                "codigoSAP": "SAP890"
              },
              "quantidade_produto": 1,
              "separado": false
            },
            {
              "id": "061cb21a-c6e1-11ee-9c08-b445067b803e",
              "produto": {
                "id": "061cb21a-c6e1-11ee-9c08-b445067b803e",
                "descricao": "Produto J",
                "partnumber": "678901",
                "setor": "A",
                "codigoSAP": "SAP678"
              },
              "quantidade_produto": 100,
              "separado": false
            }
          ],
          "concluido": false
        },
        {
          "id_pedido": "51470f02-cd05-11ee-a218-a4bb6d746e70",
          "observacoes": "Pedido 2 Observações",
          "usuario_supervisor": "002",
          "setor": "B",
          "itens_pedido": [
            {
              "id": "0619084a-c6e1-11ee-9c08-b445067b803e",
              "produto": {
                "id": "0619084a-c6e1-11ee-9c08-b445067b803e",
                "descricao": "Produto B",
                "partnumber": "789012",
                "setor": "B",
                "codigoSAP": "SAP789"
              },
              "quantidade_produto": 100,
              "separado": false
            },
            {
              "id": "061aaaa8-c6e1-11ee-9c08-b445067b803e",
              "produto": {
                "id": "061aaaa8-c6e1-11ee-9c08-b445067b803e",
                "descricao": "Produto E",
                "partnumber": "567890",
                "setor": "B",
                "codigoSAP": "SAP567"
              },
              "quantidade_produto": 5,
              "separado": false
            },
            {
              "id": "061bb8fb-c6e1-11ee-9c08-b445067b803e",
              "produto": {
                "id": "061bb8fb-c6e1-11ee-9c08-b445067b803e",
                "descricao": "Produto H",
                "partnumber": "456789",
                "setor": "B",
                "codigoSAP": "SAP456"
              },
              "quantidade_produto": 10,
              "separado": false
            }
          ],
          "concluido": false
        },
        {
          "id_pedido": "5147c810-cd05-11ee-a218-a4bb6d746e70",
          "observacoes": "Pedido 3 Observações",
          "usuario_supervisor": "002",
          "setor": "C",
          "itens_pedido": [
            {
              "id": "0619b8ac-c6e1-11ee-9c08-b445067b803e",
              "produto": {
                "id": "0619b8ac-c6e1-11ee-9c08-b445067b803e",
                "descricao": "Produto C",
                "partnumber": "345678",
                "setor": "C",
                "codigoSAP": "SAP345"
              },
              "quantidade_produto": 20,
              "separado": false
            },
            {
              "id": "061af93d-c6e1-11ee-9c08-b445067b803e",
              "produto": {
                "id": "061af93d-c6e1-11ee-9c08-b445067b803e",
                "descricao": "Produto F",
                "partnumber": "234567",
                "setor": "C",
                "codigoSAP": "SAP234"
              },
              "quantidade_produto": 20,
              "separado": false
            },
            {
              "id": "061c560a-c6e1-11ee-9c08-b445067b803e",
              "produto": {
                "id": "061c560a-c6e1-11ee-9c08-b445067b803e",
                "descricao": "Produto I",
                "partnumber": "012345",
                "setor": "C",
                "codigoSAP": "SAP012"
              },
              "quantidade_produto": 5,
              "separado": false
            }
          ],
          "concluido": false
        }
      ]

      await localStorage.setItem("ListaPedidos", JSON.stringify(lista))
    }
    await ListarPedidos();
  }

  // function ListarProdutos() {
  //   api.get("produto")
  //     .then((response) => {
  //       setListaProdutos(response.data)
  //       console.log(response);

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
    CriarPedidos();
  }, [])

  function Filtrar(e: any) {
    if (e.target.checked) {
      setListaPedidos(JSON.parse(localStorage.getItem("ListaPedidos")!).filter((pedido: any) => !pedido.concluido))
    }else{
      ListarPedidos();
    }
  }

  async function ListarPedidos() {
    await setListaPedidos(JSON.parse(localStorage.getItem("ListaPedidos")!))
  }

  return (
    <main className="vis_pedido">
      <div className="filtro">
        <input onChange={(e) => Filtrar(e)} type="checkbox" name="filtro" id="filtro"/>
        <label htmlFor="filtro">Visualizar Pedidos Aguardando</label>
      </div>
      <ul>
        {
          listaPedidos.map((pedido: any, index) => {

            return <li key={index}>
              <CardPedido
                id={pedido.id_pedido}
                observacoes={pedido.observacoes}
                usuario_supervisor={pedido.usuario_supervisor}
                setor={pedido.setor}
                concluido={pedido.concluido}
              />
            </li>

          })
        }
      </ul>
      <ul>
        {
          listaProdutos.map((produto: any, index) => {
            return <li key={index}>
              <CardProduto
                id={produto.id}
                item={produto.item}
              />
            </li>
          })
        }
      </ul>


    </main>
  )
}

export default Vis_Pedido;