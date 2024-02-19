import { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";

function CardProduto(props: any) {
    const [statePedido, setStatePedido] = useState<any>();

    const { idPedido } = useParams();

    async function alterarCheck(e: any) {
        var listaPedidos = JSON.parse(localStorage.getItem("ListaPedidos")!);

        for (let index = 0; index < listaPedidos.length; index++) {
            const pedido = listaPedidos[index];
            if (pedido.id_pedido == idPedido) {
                setStatePedido(pedido)

                for (let index = 0; index < pedido.itens_pedido.length; index++) {
                    const produto = pedido.itens_pedido[index];
                    if (produto.produto.id == props.item.produto.id) {
                        if (e.target.checked == true) {

                            produto.separado = true
                        }else {
                            produto.separado = false
                        }
                    } 
                }
            }
        }
        await localStorage.setItem("ListaPedidos", JSON.stringify(listaPedidos))
    }

    useEffect(() => {
        //executa uma ação após o componente ser recarregado
        //ListarProdutos();

    }, [])

    return (
        <div className="div_alinhamento_label">
            <article className="cartao_produto">
                <div className="cartao_produto_box">
                    <div className="cartao_produto_linha">
                        <p>Part Number: {props.item.produto.partnumber}</p>
                        <p>Codigo SAP: {props.item.produto.codigoSAP}</p>
                    </div>

                    <div className="cartao_produto_linha">
                        <p>Descrição: {props.item.produto.descricao}</p>
                        <p>Quantidade: {props.item.quantidade_produto}</p>
                    </div>
                </div>
                <input onChange={(e) => alterarCheck(e)} id="check" type="checkbox" checked={props.item.produto.separado} />
            </article>
            <div className="borda__produto"></div>
        </div>
    )
}
export default CardProduto;