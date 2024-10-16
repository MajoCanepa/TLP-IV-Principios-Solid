import { IVehicleRepository } from "../interfaces/IVehicleRepository";
import { IVehicle } from "../models/IVehicle";

export class VehicleRepository implements IVehicleRepository {

    constructor(private vehicleRepository: IVehicleRepository) { }

    async create(vehicle: IVehicle): Promise<IVehicle> {
        return this.vehicleRepository.create(vehicle);
    }

    async findById(id: number): Promise<IVehicle | null> {
        return this.vehicleRepository.findById(id);
    }

    async findAll(): Promise<IVehicle[]> {
        return this.vehicleRepository.findAll();
    }

    async update(id: number, vehicle: IVehicle): Promise<IVehicle> {
        return this.vehicleRepository.update(id, vehicle);
    }

    async delete(id: number): Promise<void> {
        return this.vehicleRepository.delete(id);
    }
}
