package com.api.gastapi.controllers;

import com.api.gastapi.dtos.DetalhamentoPedidoDto;
import com.api.gastapi.dtos.PedidoAtualizacaoDto;
import com.api.gastapi.dtos.PedidoDto;
import com.api.gastapi.dtos.PedidoListagemDto;
import com.api.gastapi.dtosMock.ItemPedidoDTO;
import com.api.gastapi.dtosMock.PedidoDTO;
import com.api.gastapi.dtosMock.ProdutoDTO;
import com.api.gastapi.models.PedidoModel;
import com.api.gastapi.repositories.PedidoRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.hibernate.mapping.Any;
import org.hibernate.mapping.Array;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/pedido", produces = {"application/json"})
public class PedidoController {
    @Autowired
    private PedidoRepository repository;

    @PostMapping
    @Transactional
    public ResponseEntity cadastrarPedido(@RequestBody @Valid PedidoDto dados, UriComponentsBuilder uriBuilder) {
        var pedido = new PedidoModel(dados);
        repository.save(pedido);

        var uri = uriBuilder.path("/pedido/{id}").buildAndExpand(pedido.getId_pedido()).toUri();

        return ResponseEntity.created(uri).body(new DetalhamentoPedidoDto(pedido));
    }

    @GetMapping
    public List<PedidoListagemDto> listarPedido() {
        return repository.findAll().stream().map(PedidoListagemDto::new).toList();
    }

    @GetMapping("/id")
    public ResponseEntity<Object> buscarPedidoId() {
        // Criando uma lista de pedidos mocados
        List<PedidoDTO> pedidos = Arrays.asList(
                new PedidoDTO(
                        "061d105d-c6e1-11ee-9c08-b445067b803e",
                        "Pedido 1 Observações",
                        "002",
                        "A",
                        Arrays.asList(
                                new ItemPedidoDTO(
                                        "6f99a9da-c6e1-11ee-9c08-b445067b803e",
                                        new ProdutoDTO(
                                                "0619084a-c6e1-11ee-9c08-b445067b803e",
                                                "Produto B",
                                                "789012",
                                                "B",
                                                "SAP789",
                                                false
                                        ),
                                        10
                                ),
                                new ItemPedidoDTO(
                                        "715b7d26-cc52-11ee-9c08-b445067b803e",
                                        new ProdutoDTO(
                                                "0618a348-c6e1-11ee-9c08-b445067b803e",
                                                "Produto A",
                                                "123456",
                                                "A",
                                                "SAP123",
                                                false
                                        ),
                                        10
                                ),
                                new ItemPedidoDTO(
                                        "d9b9ceb0-c791-11ee-9c08-b445067b803e",
                                        new ProdutoDTO(
                                                "0619084a-c6e1-11ee-9c08-b445067b803e",
                                                "Produto B",
                                                "789012",
                                                "B",
                                                "SAP789",
                                                false
                                        ),
                                        10
                                )
                        ),
                        false
                )
        );

        return ResponseEntity.status(HttpStatus.OK).body(pedidos);
    }


    @GetMapping("/{id_pedido}")
    public ResponseEntity<Object> buscarPedido(@PathVariable(value = "id_pedido") UUID id_pedido) {
        Optional<PedidoModel> pedidoBuscado = repository.findById(id_pedido);

        if (pedidoBuscado.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario não encontrado");
        }

        return ResponseEntity.status(HttpStatus.OK).body(pedidoBuscado.get());
    }

    @PutMapping
    @Transactional
    public ResponseEntity atualizarPedido(@RequestBody @Valid PedidoAtualizacaoDto dados) {
        var pedido = repository.getReferenceById(dados.id_pedido());
        pedido.atualizarInformacoes(dados);

        return ResponseEntity.ok(new DetalhamentoPedidoDto(pedido));
    }

    @DeleteMapping("/{id_pedido}")
    @Transactional
    public ResponseEntity<Object> deletarPedido(@PathVariable(value = "id_pedido") UUID id_pedido) {
        Optional<PedidoModel> pedidoBuscado = repository.findById(id_pedido);

        if (pedidoBuscado.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pedido não encontrado");
        }
        repository.deleteById(id_pedido);
        return ResponseEntity.status(HttpStatus.OK).body("Pedido deletado com sucesso!");
    }
}
