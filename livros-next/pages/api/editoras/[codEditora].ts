import { NextApiRequest, NextApiResponse } from 'next'
import {controleEditora} from '.'

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (!req.method || req.method !== 'GET') {
            res.status(405);
            res.setHeader('Allow', 'GET');
            res.end();
            return;
        }
        let codEditora = Number(req.query.codEditora);

        let json = {nome: controleEditora.getEditora(codEditora)}

        res.status(200).json(json);
    } catch (error) {
        res.status(500);
    }
}