package com.api.gastapi.dtosMock;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProdutoDTO {
    private final String id;
    private final String descricao;
    private final String partnumber;
    private final String setor;
    private final String codigoSAP;
    private final Boolean separado;

    public ProdutoDTO(String id, String descricao, String partnumber, String setor, String codigoSAP, Boolean separado) {
        this.id = id;
        this.descricao = descricao;
        this.partnumber = partnumber;
        this.setor = setor;
        this.codigoSAP = codigoSAP;
        this.separado = separado;
    }
}
