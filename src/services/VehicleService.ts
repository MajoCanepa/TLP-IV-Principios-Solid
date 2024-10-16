import { VehicleMongo } from "../db/vehicle-mongo";
import { IVehicleRepository } from "../interfaces/IVehicleRepository";
import { IVehicle } from "../models/IVehicle";
import { VehicleRepository } from "../repositories/VehicleRepository";


export class VehicleService {
    
    constructor(private privateRepository: IVehicleRepository = new VehicleRepository(new VehicleMongo)) {}

    async create(vehicle: IVehicle): Promise<IVehicle> {
        return this.privateRepository.create(vehicle);
    }

    async findById(id: number): Promise<IVehicle | null> {
        return this.privateRepository.findById(id);
    }

    async findAll(): Promise<IVehicle[]> {
        return this.privateRepository.findAll();
    }

    async update(id: number, vehicle: IVehicle): Promise<IVehicle> {
        return this.privateRepository.update(id, vehicle);
    }

    async delete(id: number): Promise<void> {
        return this.privateRepository.delete(id);
    }
    
}