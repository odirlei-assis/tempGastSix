package com.api.gastapi.repositories;

import com.api.gastapi.models.PedidoModel;
import org.hibernate.mapping.Any;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface PedidoRepository extends JpaRepository<PedidoModel, UUID> {}
