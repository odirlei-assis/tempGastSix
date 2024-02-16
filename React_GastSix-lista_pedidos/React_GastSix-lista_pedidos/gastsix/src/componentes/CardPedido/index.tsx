import { Link } from "react-router-dom";
import "./style.css";


function CardPedido(props: any) {
    return (
        <div className="div_alinhamento_label">
            <Link to={"/detalhesPedido/" + props.id} className="cartao__pedido">
                <p>Id Pedido: {props.id}</p>
                
                <p>Observações: {props.observacoes}</p>
                
                <p>Usuario Supervisor: {props.usuario_supervisor}</p>
                
                <p>Setor: {props.setor}</p>
            </Link>
            <div className="borda__pedido"></div>
        </div>
        
    );

}

export default CardPedido;