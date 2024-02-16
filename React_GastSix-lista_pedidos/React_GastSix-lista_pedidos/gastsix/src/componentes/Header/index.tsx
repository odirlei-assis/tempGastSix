import "./style.css";

import imgLOGO from "../../assets/img/LOGO.png";
import { useLocation } from "react-router-dom";

// criando uma funcao header que retorna algo.
function Header() {

  function verificaComponentes() {
    const location = useLocation();
    switch (location.pathname) {
      case '/cadastroProduto':
        return 'Cadastro de Produtos'
        break;

      case '/cadastroFornecedores':
        return 'Cadastro de Fornecedores'
        break;

      case '/entradaEstoque':
        return 'Entrada de Estoque'
        break;

      case '/ajusteEstoque':
        return 'Ajustes de Estoque'
        break;

      case '/consultaEstoque':
        return 'Consulta de Estoque'
        break;

      case '/visualizarPedido':
        return 'Visualizar Pedidos'
        break;

      case '/lancarPedido':
        return 'Lançar Pedidos'
        break;

      case '/importarPedido':
        return 'Importar Pedidos'
        break;

      case '/cadastroDispositivo':
        return 'Cadastro de Dispositivos'
        break;

      case '/detalhesPedido':
        return 'Detalhes do Pedido'
        break; 

      // case '/cadastroDispositivo':
      //   return 'Cadastro de Dispositivos'
      //   break;

      default:
        return 'GastSix'
        break;

      // case '/cadastroDispositivo':
      //   return 'Cadastro de Dispositivos'
      //   break;

      case '/relatorioMovimentacao':
        return 'Relatório de Operadores'
        break;

      case '/relatorioEstoque':
        return 'Relatório de Estoque'
        break;

      case '/loginHome':
        return 'Gastsix'
        break;

      case '/':
        return 'Gastsix'
        break;

      case '/quemsomos':
        return 'Quem Somos'
        break;

      case '/cadastrousuario':
        return 'Cadastro de Usuário'
        break;

    
    }
  }

  return (
    <>
      {
        location.pathname !== ""
          ? <header>
            {/*cabecalho*/}
            <nav className="botao_nav">
              <img className="logo" src={imgLOGO} alt="" />
              <h1>{verificaComponentes()}</h1>
              <a className="botao_fechar" href="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  {/*! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </a>
            </nav>
          </header>
          : ""
      }
    </>
  )
}


//header padrao
export default Header