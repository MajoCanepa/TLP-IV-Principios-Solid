import { Router } from "express";
import { ClientController } from '../controllers/ClientController';
import { ClientService } from "../services/ClientService";


export class ClientRoutes {
    static getRoutes(): Router {
        const router = Router();
        const clientController = new ClientController(new ClientService());

        router.post('/', clientController.create)
        router.get('/', clientController.findAll);
        router.get('/:id', clientController.findById);
        router.put('/:id', clientController.update);
        router.delete('/:id', clientController.delete);

        return router;
    }
}