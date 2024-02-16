CREATE DATABASE  IF NOT EXISTS `gastsix` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `gastsix`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: gastsix
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `fornecedor`
--

DROP TABLE IF EXISTS `fornecedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fornecedor` (
  `id_fornecedor` binary(16) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `cnpj` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `inscricao_estadual` varchar(255) DEFAULT NULL,
  `razao_social` varchar(255) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_fornecedor`),
  UNIQUE KEY `id_fornecedor` (`id_fornecedor`),
  UNIQUE KEY `cnpj` (`cnpj`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fornecedor`
--

LOCK TABLES `fornecedor` WRITE;
/*!40000 ALTER TABLE `fornecedor` DISABLE KEYS */;
INSERT INTO `fornecedor` VALUES (_binary 'f}\∆\·\Óú¥E{Ä>','EMPRESA A','12345678000190','fornecedor1@examplecom','123456789','Empresa A','Rua Principal - 123'),(_binary '˚8\∆\·\Óú¥E{Ä>','EMPRESA B','98765432000121','fornecedor2@examplecom','987654321','Empresa B','Avenida Secund√°ria - 456'),(_binary 'Nh\∆\·\Óú¥E{Ä>','EMPRESA C','11223344000156','fornecedor3@examplecom','1122334455','Empresa C','Travessa da Rua Principal - 789'),(_binary '\ﬂ\’\∆\·\Óú¥E{Ä>','EMPRESA D','22334455000178','fornecedor4@examplecom','2233445566','Empresa D','Pra√ßa Central - 321'),(_binary '0y\∆\·\Óú¥E{Ä>','EMPRESA E','33445566000190','fornecedor5@examplecom','3344556677','Empresa E','Alameda dos Anjos - 567'),(_binary '\∆\·\Óú¥E{Ä>','EMPRESA F','44556677000112','fornecedor6@examplecom','4455667788','Empresa F','Estrada do Interior -890'),(_binary '”¥\∆\·\Óú¥E{Ä>','EMPRESA G','55667788000134','fornecedor7@examplecom','5566778899','Empresa G','Avenida Principal - 1234'),(_binary 'eÇ\∆\·\Óú¥E{Ä>','EMPRESA H','66778899000156','fornecedor8@examplecom','6677889900','Empresa H','Rua da Praia - 5678'),(_binary 'µ´\∆\·\Óú¥E{Ä>','EMPRESA I','77889900000178','fornecedor9@examplecom','7788990011','Empresa I','Travessa da Avenida - 4321'),(_binary '\'4\∆\·\Óú¥E{Ä>','EMPRESA J','88990011000190','fornecedor10@examplecom','8899001122','Empresa J','Rua do Com√©rcio 9876');
/*!40000 ALTER TABLE `fornecedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido` (
  `id_pedido` binary(16) NOT NULL,
  `observacoes` varchar(255) DEFAULT NULL,
  `usuario_supervisor` varchar(255) NOT NULL,
  `setor` char(1) NOT NULL,
  PRIMARY KEY (`id_pedido`),
  UNIQUE KEY `id_pedido` (`id_pedido`),
  KEY `usuario_supervisor` (`usuario_supervisor`),
  CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`usuario_supervisor`) REFERENCES `usuario` (`matricula`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
INSERT INTO `pedido` VALUES (_binary ']\∆\·\Óú¥E{Ä>','Pedido 1 Observa√ß√µes','002','A');
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidoproduto`
--

DROP TABLE IF EXISTS `pedidoproduto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidoproduto` (
  `id_pedidoproduto` binary(16) NOT NULL,
  `id_pedido` binary(16) NOT NULL,
  `id_produto` binary(16) NOT NULL,
  `quantidade_produto` int NOT NULL,
  PRIMARY KEY (`id_pedidoproduto`),
  UNIQUE KEY `id_pedidoproduto` (`id_pedidoproduto`),
  KEY `id_pedido` (`id_pedido`),
  KEY `id_produto` (`id_produto`),
  CONSTRAINT `pedidoproduto_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedido` (`id_pedido`),
  CONSTRAINT `pedidoproduto_ibfk_2` FOREIGN KEY (`id_produto`) REFERENCES `produto` (`id_produto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidoproduto`
--

LOCK TABLES `pedidoproduto` WRITE;
/*!40000 ALTER TABLE `pedidoproduto` DISABLE KEYS */;
INSERT INTO `pedidoproduto` VALUES (_binary 'oô©\⁄\∆\·\Óú¥E{Ä>',_binary ']\∆\·\Óú¥E{Ä>',_binary 'J\∆\·\Óú¥E{Ä>',10),(_binary 'q[}&\ÃR\Óú¥E{Ä>',_binary ']\∆\·\Óú¥E{Ä>',_binary '£H\∆\·\Óú¥E{Ä>',10),(_binary 'ŸπŒ∞«ë\Óú¥E{Ä>',_binary ']\∆\·\Óú¥E{Ä>',_binary 'J\∆\·\Óú¥E{Ä>',10);
/*!40000 ALTER TABLE `pedidoproduto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto` (
  `id_produto` binary(16) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `partnumber` varchar(255) NOT NULL,
  `codigoSAP` varchar(255) DEFAULT NULL,
  `setor` char(1) DEFAULT NULL,
  PRIMARY KEY (`id_produto`),
  UNIQUE KEY `id_produto` (`id_produto`),
  UNIQUE KEY `partnumber` (`partnumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (_binary '£H\∆\·\Óú¥E{Ä>','Produto A','123456','SAP123','A'),(_binary 'J\∆\·\Óú¥E{Ä>','Produto B','789012','SAP789','B'),(_binary '∏¨\∆\·\Óú¥E{Ä>','Produto C','345678','SAP345','C'),(_binary '\ZM˘\∆\·\Óú¥E{Ä>','Produto D','901234','SAP901','A'),(_binary '\Z™®\∆\·\Óú¥E{Ä>','Produto E','567890','SAP567','B'),(_binary '\Z˘=\∆\·\Óú¥E{Ä>','Produto F','234567','SAP234','C'),(_binary 'Jê\∆\·\Óú¥E{Ä>','Produto G','890123','SAP890','A'),(_binary '∏˚\∆\·\Óú¥E{Ä>','Produto H','456789','SAP456','B'),(_binary 'V\n\∆\·\Óú¥E{Ä>','Produto I','012345','SAP012','C'),(_binary '≤\Z\∆\·\Óú¥E{Ä>','Produto J','678901','SAP678','A'),(_binary 'õ\Ì\∆\·\Óú¥E{Ä>','Pedido 2 Observa√ß√µes','003','004','B'),(_binary '\"6\∆\·\Óú¥E{Ä>','Pedido 3 Observa√ß√µes','005','006','C'),(_binary 'n%\∆\·\Óú¥E{Ä>','Pedido 4 Observa√ß√µes','007','008','A'),(_binary '¿\∆\·\Óú¥E{Ä>','Pedido 5 Observa√ß√µes','009','010','B'),(_binary '\∆\·\Óú¥E{Ä>','Pedido 6 Observa√ß√µes','001','002','C'),(_binary 'f>\∆\·\Óú¥E{Ä>','Pedido 7 Observa√ß√µes','013','004','A'),(_binary '—®\∆\·\Óú¥E{Ä>','Pedido 8 Observa√ß√µes','015','006','B'),(_binary ' U˛\∆\·\Óú¥E{Ä>','Pedido 9 Observa√ß√µes','017','008','C'),(_binary ' ¢;\∆\·\Óú¥E{Ä>','Pedido 10 Observa√ß√µes','019','010','A');
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `matricula` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `cpf` varchar(255) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `funcao` int NOT NULL,
  `data_admissao` date DEFAULT NULL,
  `setor` char(1) DEFAULT NULL,
  PRIMARY KEY (`matricula`),
  UNIQUE KEY `matricula` (`matricula`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('001','maria@gmail.com','11122233344','Maria Oliveira','senhaMaria',0,'2023-01-15',NULL),('002','carlos@gmail.com','44455566677','Carlos Santos','senhaCarlos',1,'2022-09-28','A'),('003','amanda@gmail.com','88899900011','Amanda Silva','senhaAmanda',2,'2023-03-10','B'),('004','roberto@gmail.com','12345678900','Roberto Souza','senhaRoberto',0,'2022-12-05',NULL),('005','juliana@gmail.com','98765432100','Juliana Lima','senhaJuliana',1,'2022-11-18',NULL),('006','lucas@gmail.com','55566677788','Lucas Oliveira','senhaLucas',2,'2023-02-20',NULL),('007','fernanda@gmail.com','77788899900','Fernanda Costa','senhaFernanda',0,'2022-10-12',NULL),('008','pedro@gmail.com','22233344455','Pedro Rocha','senhaPedro',1,'2023-04-08',NULL),('009','larissa@gmail.com','99900011122','Larissa Santos','senhaLarissa',2,'2022-08-25',NULL),('010','rafaela@gmail.com','66677788899','Rafaela Pereira','senhaRafaela',2,'2023-05-15',NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-15 19:53:52
