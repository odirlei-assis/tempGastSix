package com.api.gastapi.dtosMock;

import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
public class PedidoDTO {
    private final String idPedido;
    private final String observacoes;
    private final String usuarioSupervisor;
    private final String setor;
    private final List<ItemPedidoDTO> itensPedido;
    private final Boolean concluido;

    public PedidoDTO(String idPedido, String observacoes, String usuarioSupervisor, String setor, List<ItemPedidoDTO> itensPedido, Boolean concluido) {
        this.idPedido = idPedido;
        this.observacoes = observacoes;
        this.usuarioSupervisor = usuarioSupervisor;
        this.setor = setor;
        this.itensPedido = itensPedido;
        this.concluido = concluido;
    }
}
