import { Request, Response } from "express";
import { ClientService } from "../services/ClientService";

export class ClientController {
    constructor(private clientService: ClientService) {}

    create = async (req: Request, res: Response): Promise<Response> => {
        const client = await this.clientService.create(req.body);
        return res.json(client);
    };

    findById = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;
        const client = await this.clientService.findById(Number(id));
        return res.json(client);
    };

    findAll = async (req: Request, res: Response): Promise<Response> => {
        const clients = await this.clientService.findAll();
        return res.json(clients);
    };

    update = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;
        const client = await this.clientService.update(Number(id), req.body);
        return res.json(client);
    };

    delete = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;
        await this.clientService.delete(Number(id));
        return res.json({ message: 'Client deleted' });
    };
}
