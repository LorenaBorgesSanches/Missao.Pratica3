import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ControleEditora } from "./controle/ControleEditora";
import { ControleLivro } from "./controle/ControleLivro";
import { Livro } from "./modelo/Livro";

function LivroDados() {
    const controleLivro = new ControleLivro();
    const controleEditora = new ControleEditora();

    let opcoes = controleEditora.getEditoras().map(x => { return { value: x.codEditora, name: x.nome } });

    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setCodEditora] = useState(opcoes[0]);

    const navigate = useNavigate();

    const tratarCombo = (evento: any): any => {
        let codEditora = parseInt(evento.target.value)
        setCodEditora(opcoes.filter(x => x.value === codEditora)[0]);
    }

    const incluir = (evento: any): any => {
        evento.preventDefault();
        let livro = new Livro(0, codEditora.value, titulo, resumo, autores.split('\n'));
        controleLivro.incluir(livro);
        navigate("/");
    }

    return (
        <main>
            <form onSubmit={incluir}>
                <div className="row gx-0 pb-2">
                    <h1>Dados do Livro</h1>
                </div>

                <div className="row gx-0 pb-2">
                    <label>Titulo</label>
                    <input className="form-control" value={titulo} onChange={e => setTitulo(e.target.value)}></input>
                </div>

                <div className="row gx-0 pb-2">
                    <label>Resumo</label>
                    <textarea className="form-control" value={resumo} onChange={e => setResumo(e.target.value)}></textarea>
                </div>

                <div className="row gx-0 pb-2">
                    <label>Editora</label>
                    <select className="form-control" onChange={tratarCombo}>
                        {opcoes.map(x => { return <option key={x.value} value={x.value}>{x.name}</option> })}
                    </select>
                </div>

                <div className="row gx-0">
                    <label>Autores</label>
                    <textarea className="form-control" value={autores} onChange={e => setAutores(e.target.value)}></textarea>
                </div>
                <br></br>

                <div className="row gx-0">
                    <div className="col">
                        <input className={"btn btn-primary"} type={"submit"} value={"Salvar Dados"}></input>
                    </div>
                </div>
            </form>
        </main>
    );
}

export default LivroDados;