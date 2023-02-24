import { Editora } from "../modelo/Editora";

let editoras = new Array<Editora>(
    new Editora(1, "Editora Arqueiro"),
    new Editora(2, "Suma"),
    new Editora(3, "Rocco")
)

export class ControleEditora {
    public getEditora(codEditora: number) {
        return editoras.filter(x => x.codEditora === codEditora)[0]?.nome;
    }

    public getEditoras() {
        return editoras;
    }
}