import { IClientRepository } from "../interfaces/IClientRepository";
import { IClient } from "../models/IClient";



export class ClientRepository implements IClientRepository {

    constructor(private clientRepository: IClientRepository = clientRepository){ }

    async create(client: IClient): Promise<IClient> {
        return this.clientRepository.create(client);
    }

    async findById(id: number): Promise<IClient | null> {
        return this.clientRepository.findById(id);
    }

    async findAll(): Promise<IClient[]> {
        return this.clientRepository.findAll();
    }

    async update(id: number, client: IClient): Promise<IClient> {
        return this.clientRepository.update(id, client);
    
    }

    async delete(id: number): Promise<void> {
       return this.clientRepository.delete(id);
    }


}