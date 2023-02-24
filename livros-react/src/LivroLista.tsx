import { useEffect, useState } from "react";
import { ControleEditora } from "./controle/ControleEditora";
import { ControleLivro } from "./controle/ControleLivro";
import { Livro } from "./modelo/Livro";


function LivroLista() {
    const controleLivro = new ControleLivro();
    const controleEditora = new ControleEditora();

    const [livros, setLivros] = useState(new Array<Livro>());
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        setLivros(controleLivro.obterLivros());
        setCarregado(true);
    }, [carregado, livros]);


    const excluir = (codLivro: number): any => {
        controleLivro.excluir(codLivro);
        setCarregado(false);
    }

    function LinhaLivro(props: Livro, excluir: any) {
        let nomeEditora = controleEditora.getEditora(props.codEditora);
        let autores = props.autores.map((x, i) => <li key={i}>{x}</li>);
        return <tr>
            <td>{props.titulo} <br /><button className="btn btn-danger" onClick={() => { excluir() }}>Excluir</button></td>
            <td>{props.resumo}</td>
            <td>{nomeEditora}</td>
            <td><ul>{autores}</ul></td>
        </tr>;
    }

    return (
        <main>
            <h1>Catálogo de Livros</h1>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>Título</th>
                        <th>Resumo</th>
                        <th>Editora</th>
                        <th>Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {carregado && livros.map(x => LinhaLivro(x, () => { excluir(x.codigo) }))}
                </tbody>
            </table>
        </main>
    );
}

export default LivroLista;