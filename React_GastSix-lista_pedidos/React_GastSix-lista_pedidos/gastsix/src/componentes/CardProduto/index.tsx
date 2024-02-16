import"./style.css";

function CardProduto(props:any) {
    return(
        <div className="div_alinhamento_label">
        <article className="cartao__produto">
            <div>
                <p>Part Number: {props.partnumber}</p>
                <p>Codigo SAP: {props.codigoSAP}</p>
            </div>
            
            <div>
                <p>Descrição: {props.descricao}</p>
                <p>Quantidade: {props.quantidade_produto}</p>
            </div>
            <input type="checkbox" checked={props.separado} />
        </article>
        <div className="borda__produto"></div>
    </div>
    )
}
export default CardProduto;