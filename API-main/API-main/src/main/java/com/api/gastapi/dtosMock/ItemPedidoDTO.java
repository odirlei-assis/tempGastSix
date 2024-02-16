package com.api.gastapi.dtosMock;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ItemPedidoDTO {
    private final String id;
    private final ProdutoDTO produto;
    private final int quantidadeProduto;

    public ItemPedidoDTO(String id, ProdutoDTO produto, int quantidadeProduto) {
        this.id = id;
        this.produto = produto;
        this.quantidadeProduto = quantidadeProduto;
    }
}
