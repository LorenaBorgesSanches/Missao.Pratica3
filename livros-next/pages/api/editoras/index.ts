import { ControleEditora } from "@/classes/controle/ControleEditora";
import { NextApiRequest, NextApiResponse } from "next";

export const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (!req.method || req.method !== 'GET') {
            res.status(405);
            res.setHeader('Allow', 'GET');
            res.end();
            return;
        }

        res.status(200).json(controleEditora.getEditoras());
    } catch (error) {
        res.status(500);
    }
}