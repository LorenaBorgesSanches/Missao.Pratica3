import { NextApiRequest, NextApiResponse } from 'next'
import {controleLivro} from '.'

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (!req.method || req.method !== 'DELETE') {
            res.status(405);
            res.setHeader('Allow', 'DELETE');
            res.end();
            return;
        }
        let codigo = Number(req.query.codigo);

        let json = {nome: controleLivro.excluir(codigo)}

        res.status(200).json(json);
    } catch (error) {
        res.status(500);
    }
}