import { IVehicle } from "../models/IVehicle";

export interface IVehicleRepository {
    create(vehicle: IVehicle): Promise<IVehicle>;
    findById(id: number):  Promise<IVehicle | null>;
    findAll(): Promise<IVehicle[]>;
    update(id: number, vehicle: IVehicle): Promise<IVehicle>;
    delete(id: number): void;
}