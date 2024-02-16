//Imports React - adicionar imports dos componentes React abaixo 
import React from 'react'
import ReactDOM from 'react-dom/client'

//Estilização da página CSS
import './index.css';

//componentes
import Header from "../src/componentes/Header";
import Menu_Lateral from "./componentes/Menu_Lateral";
import Cad_Produto from "./pages/Cad_Produto";
import Cad_Fornecedores from './pages/Cad_Fornecedores';
import Tel_Ajuste from "./pages/Tel_Ajuste";
import Ent_Estoque from "./pages/Ent_Estoque";
import Con_Estoque from "./pages/Con_Estoque";
import Cad_Dispositivo from './pages/Cad_Dispositivo';
import Rel_Movimentacao from './pages/Rel_Movimentacao';
import Rel_Operadores from './pages/Rel_Operadores';
import Rel_Estoque from './pages/Rel_Estoque';
import Imp_Pedido from './pages/Imp_Pedido';
import Vis_Pedido from './pages/Vis_Pedido';
import Lan_Pedido from './pages/Lan_Pedido';
import Cad_Usuario from './pages/Cad_Usuario';
import Log_Home from './pages/Log_Home';
import Login from './pages/Login';
import Quem_Somos from './pages/Quem_Somos';
import Det_Pedido from './pages/Det_pedido';

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/*Indica que aplicação terá rotas*/}
      <Header />
      <Menu_Lateral />
      <Routes>{/*Indica uma lista de rotas*/}
        <Route path='/cadastroProduto' element={<Cad_Produto />} /> {/*Indica o caminho do componente e o nome da rota dele*/}
        <Route path='/cadastroFornecedores' element={<Cad_Fornecedores />} />
        <Route path='/ajusteEstoque' element={<Tel_Ajuste />} />
        <Route path='/entradaEstoque' element={<Ent_Estoque />} />
        <Route path='/consultaEstoque' element={<Con_Estoque />} />
        <Route path='/visualizarPedido' element={<Vis_Pedido />} />
        <Route path='/lancarPedido' element={<Lan_Pedido />} />
        <Route path='/importarPedido' element={<Imp_Pedido />} />
        <Route path='/cadastroDispositivo' element={<Cad_Dispositivo />} />
        <Route path='/relatorioMovimentacao' element={<Rel_Movimentacao />} />
        <Route path='/relatorioOperadores' element={<Rel_Operadores />} />
        <Route path='/relatorioEstoque' element={<Rel_Estoque />} />
        <Route path='/loginHome' element={<Log_Home />} />
        <Route path='/' element={<Login />} />
        <Route path='/quemsomos' element={<Quem_Somos />} />
        <Route path='/cadastrousuario' element={<Cad_Usuario />} />
        <Route path='/detalhesPedido/:idPedido' element={<Det_Pedido/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
