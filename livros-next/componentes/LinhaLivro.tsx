import { Livro } from "@/classes/modelo/Livro";
import { controleEditora } from "@/pages/api/editoras";

export const LinhaLivro = (props: Livro, excluir: any) => {
    let nomeEditora = controleEditora.getEditora(props.codEditora);
    let autores = props.autores.map((x, i) => <li key={i}>{x}</li>);
    return <tr>
        <td>{props.titulo} <br /><button className="btn btn-danger" onClick={() => { excluir() }}>Excluir</button></td>
        <td>{props.resumo}</td>
        <td>{nomeEditora}</td>
        <td><ul>{autores}</ul></td>
    </tr>;
}