import { IClient } from "../models/IClient";

export interface IClientRepository {
    create(client: IClient): Promise<IClient>;
    findById(id: number): Promise<IClient | null>;
    findAll(): Promise<IClient[]>;
    update(id: number, client: IClient): Promise<IClient>;
    delete(id: number): Promise<void>;
}