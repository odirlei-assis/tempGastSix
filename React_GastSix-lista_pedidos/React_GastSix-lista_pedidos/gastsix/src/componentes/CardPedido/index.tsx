import { Link } from "react-router-dom";
import "./style.css";


function CardPedido(props: any) {
    return (
        <div className="div_alinhamento_label">
            <Link to={"/detalhesPedido/" + props.id} className="cartao__pedido">
                <div>
                    <p>Id Pedido: {props.id}</p>

                    <p>Observações: {props.observacoes}</p>

                    <p>Usuario Supervisor: {props.usuario_supervisor}</p>

                    <p>Setor: {props.setor}</p>
                </div>
                {
                    props.concluido == false ?
                    <span className="aguardando">Aguardando</span> :
                    <span className="concluido">Concluído</span>
                }
            </Link>
            <div className="borda__pedido"></div>
        </div>

    );

}

export default CardPedido;