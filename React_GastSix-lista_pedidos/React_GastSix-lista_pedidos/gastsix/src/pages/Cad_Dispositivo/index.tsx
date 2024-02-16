import { useEffect } from "react";
import "./style.css";

//Hooks
import { useState } from "react"

function Cad_Dispositivo() {

    function recolherMenu() {

        let menu: any = document.getElementById("menu_lateral");
        // let menu_barras: any = document.getElementById("menu_barras");
        let menu_relatorios: any = document.getElementById("menu_lateral_relatorios");
        // let menu_relatorios_aberto: any = document.getElementById("menu_relatorios_aberto");
        let menu_pedidos: any = document.getElementById("menu_lateral_pedidos");
        let menu_estoque: any = document.getElementById("menu_lateral_estoque");
        let menu_cadastros: any = document.getElementById("menu_lateral_cadastro");
        // let menu_pedidos_aberto: any = document.getElementById("menu_pedidos_aberto");
        // let menu_estoque_aberto: any = document.getElementById("menu_estoque_aberto");
    
        menu.style.display = "none"
        // menu_barras.setAttribute("aria-label", "abrir menu")
        // menu_barras.setAttribute("aria-expandede", "false")
        menu_relatorios.style.display = "none"
        // menu_relatorios_aberto.setAttribute("aria-label", "abrir menu")
        // menu_relatorios_aberto.setAttribute("aria-expandede", "false")
        menu_pedidos.style.display = "none"
        // menu_pedidos_aberto.setAttribute("aria-label", "abrir menu")
        // menu_pedidos_aberto.setAttribute("aria-expandede", "false")
        menu_estoque.style.display = "none"
        // menu_estoque_aberto.setAttribute("aria-label", "abrir menu")
        // menu_estoque_aberto.setAttribute("aria-expandede", "false")
        menu_cadastros.style.display = "none"
    
      }
    
      useEffect(() => {
        //executa uma ação após o componente ser recarregado
        recolherMenu();
      }, [])
      
    const [codigoTipo, setCodigoTipo] = useState<string>("");
    const [ip, setIP] = useState<string>("");
    const [nomeFabricante, setNomeFabricante] = useState<string>("");
    const [tipo, setTipo] = useState<string>("");
    const [sistemaOperacional, setSistemaOperacional] = useState<string>("");

    return (
        <main className="banner__dispositivo">
            {/*indica o conteudo principal*/}
            <section className="section__formulario-dispositivo">
                {/*tag section indica uma secao*/}
                <form className="formulario-central">
                    <div className="div__alinhamento_campos">
                        <label htmlFor="input__codigo">Código Tipo:</label>
                        <input 
                        type="text" 
                        name="input__codigo" 
                        id=""
                        onChange={(e) =>setCodigoTipo(e.target.value)}
                        required 
                        />
                    </div>
                    <div className="div__alinhamento_campos">
                        <label htmlFor="input__ip">IP:</label>
                        <input 
                        type="text" 
                        name="input__ip" 
                        id=""
                        onChange={(e) =>setIP(e.target.value)}
                        required 
                        />
                    </div>
                    <div className="div__alinhamento_campos">
                        <label htmlFor="input__nomef">Nome Faricante:</label>
                        <input 
                        type="text" 
                        name="input__nomef" 
                        id=""
                        onChange={(e) =>setNomeFabricante(e.target.value)}
                        required 
                        />
                    </div>
                    <div className="div__alinhamento_campos">
                        <label htmlFor="input__tipo">Tipo:</label>
                        <input 
                        type="text" 
                        name="input__tipo" 
                        id=""
                        onChange={(e) =>setTipo(e.target.value)}
                        required 
                        />
                    </div>
                    <div className="div__alinhamento_campos">
                        <label htmlFor="input__sisope">Sistema Operacional:</label>
                        <input 
                        type="text" 
                        name="input__sisope" 
                        id=""
                        onChange={(e) =>setSistemaOperacional(e.target.value)}
                        required 
                        />
                    </div>
                    <button className="botao_cadastrar" type="submit">
                        Cadastrar
                    </button>
                </form>
            </section>
        </main>

    )

}
export default Cad_Dispositivo;