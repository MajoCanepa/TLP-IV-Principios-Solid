import { ClientMongo } from "../db/client-mongo";
import { IClientRepository } from "../interfaces/IClientRepository";
import { IClient } from "../models/IClient";
import { ClientRepository } from "../repositories/ClientRepository";

export class ClientService {
    constructor(private privateRepository: IClientRepository = new ClientRepository(new ClientMongo)) {}

    async create(client: IClient): Promise<IClient> {
        return this.privateRepository.create(client);
    }

    async findById(id: number): Promise<IClient | null> {
        return this.privateRepository.findById(id);
    }

    async findAll(): Promise<IClient[]> {
        return this.privateRepository.findAll();
    }

    async update(id: number, client: IClient): Promise<IClient> {
        return this.privateRepository.update(id, client);
    }

    async delete(id: number): Promise<void> {
        return this.privateRepository.delete(id);
    }
}