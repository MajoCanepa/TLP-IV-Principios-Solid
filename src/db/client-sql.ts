import { IClientRepository } from "../interfaces/IClientRepository";
import { IClient } from "../models/IClient";

const dataPostgres: IClient[] = [{
    id: 1,
    nombre: 'majo',
    email: 'majo@gmail.com',
    telefono: '3704414250',
},
{
    id: 2,
    nombre: 'gala',
    email: 'gala@gmail.com',
    telefono: '3704229965',
},
{
    id: 3,
    nombre: 'chiara',
    email: 'chiara@gmail.com',
    telefono: '3704892157'
},
];

export class ClientPostgres implements IClientRepository {
    async create(client: IClient): Promise<IClient> {
        const newClient = {
            ...client,
            id: dataPostgres.length + 1
        };
        dataPostgres.push(newClient);
        return newClient;
    }

    async findById(id: number): Promise<IClient | null> {
        return dataPostgres.find((client) => client.id === id) || null;
    }

    async findAll(): Promise<IClient[]> {
        return dataPostgres;
    }

    async update(id: number, client: IClient): Promise<IClient> {
        const index = dataPostgres.findIndex((client) => client.id === id);
        dataPostgres[index] = client;
        return client;
    }

    async delete(id: number): Promise<void> {
        const index = dataPostgres.findIndex((client) => client.id === id);
        dataPostgres.splice(index, 1);
    }
    
}