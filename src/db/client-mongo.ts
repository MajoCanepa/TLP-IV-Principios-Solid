import { IClientRepository } from "../interfaces/IClientRepository";
import { IClient } from "../models/IClient";

const dataMongo: IClient[] = [{
    id: 1,
    nombre: 'majo',
    email: 'majo@gmail.com',
    telefono: '123456789',
},
{
    id: 2,
    nombre: 'luis',
    email: 'luis@gmsil.com',
    telefono: '123456789',
},
{
    id: 3,
    nombre: 'pepe',
    email: 'pepito@gmail.com',
    telefono: '123456789'
},
];

export class ClientMongo implements IClientRepository {
    async create(client: IClient): Promise<IClient> {
        const newClient = {
            ...client,
            id: dataMongo.length + 1
        };
        dataMongo.push(newClient);
        return newClient;
    }

    async findById(id: number): Promise<IClient | null> {
        return dataMongo.find((client) => client.id === id) || null;
    }

    async findAll(): Promise<IClient[]> {
        return dataMongo;
    }

    async update(id: number, client: IClient): Promise<IClient> {
        const index = dataMongo.findIndex((client) => client.id === id);
        dataMongo[index] = client;
        return client;
    }

    async delete(id: number): Promise<void> {
        const index = dataMongo.findIndex((client) => client.id === id);
        dataMongo.splice(index, 1);
    }
    
}