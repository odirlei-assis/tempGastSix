import"./style.css";

function CardProduto(props:any) {
    return(
        <div className="div_alinhamento_label">
        <article className="cartao__produto">
            <p>Id Produto: {props.idproduto}</p>
            <p>Item:{props.item}</p>
            <p></p>
        </article>
        <div className="borda__produto"></div>
    </div>
    )
}
export default CardProduto;