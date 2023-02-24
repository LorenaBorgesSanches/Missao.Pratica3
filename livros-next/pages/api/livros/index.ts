import { ControleEditora } from "@/classes/controle/ControleEditora";
import { ControleLivro } from "@/classes/controle/ControleLivro";
import { NextApiRequest, NextApiResponse } from "next";

export const controleLivro = new ControleLivro();

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (!req.method || (req.method !== 'GET' && req.method !== 'POST')) {
            res.status(405);
            res.setHeader('Allow', ['GET', 'POST']);
            res.end();
            return;
        }

        if(req.method == 'GET'){
            res.status(200).json(controleLivro.obterLivros());
        }

        if(req.method == 'POST'){
            controleLivro.incluir(req.body)
            res.status(200).end();
        }

    } catch (error) {
        res.status(500);
    }
}
