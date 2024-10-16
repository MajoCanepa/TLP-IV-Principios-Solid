import { IVehicleRepository } from "../interfaces/IVehicleRepository";
import { IVehicle } from "../models/IVehicle";

const dataPostgres: IVehicle[] = [{
    id: 1,
    marca: 'toyota',
    modelo: 'corolla',
    año: 2020,
    precio: 20000,
},
{
    id: 2,
    marca: 'ford',
    modelo: 'fiesta',
    año: 2019,
    precio: 15000,
},
{
    id: 3,
    marca: 'chevrolet',
    modelo: 'onix',
    año: 2021,
    precio: 18000
},
];

export class VehiclePostgres implements IVehicleRepository {
    async create(vehicle: IVehicle): Promise<IVehicle> {
        const newVehicle = {
            ...vehicle,
            id: dataPostgres.length + 1
        };
        dataPostgres.push(newVehicle);
        return newVehicle;
    }

    async findById(id: number): Promise<IVehicle | null> {
        return dataPostgres.find((vehicle) => vehicle.id === id) || null;
    }

    async findAll(): Promise<IVehicle[]> {
        return dataPostgres;
    }

    async update(id: number, vehicle: IVehicle): Promise<IVehicle> {
        const index = dataPostgres.findIndex((vehicle) => vehicle.id === id);
        dataPostgres[index] = vehicle;
        return vehicle;
    }

    async delete(id: number): Promise<void> {
        const index = dataPostgres.findIndex((vehicle) => vehicle.id === id);
        dataPostgres.splice(index, 1);
    }
}
