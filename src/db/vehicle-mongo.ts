import { IVehicleRepository } from "../interfaces/IVehicleRepository";
import { IVehicle } from "../models/IVehicle";

const dataMongo: IVehicle[] = [{
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

export class VehicleMongo implements IVehicleRepository {
    async create(vehicle: IVehicle): Promise<IVehicle> {
        const newVehicle = {
            ...vehicle,
            id: dataMongo.length + 1
        };
        dataMongo.push(newVehicle);
        return newVehicle;
    }

    async findById(id: number): Promise<IVehicle | null> {
        return dataMongo.find((vehicle) => vehicle.id === id) || null;
    }

    async findAll(): Promise<IVehicle[]> {
        return dataMongo;
    }

    async update(id: number, vehicle: IVehicle): Promise<IVehicle> {
        const index = dataMongo.findIndex((vehicle) => vehicle.id === id);
        dataMongo[index] = vehicle;
        return vehicle;
    }

    async delete(id: number): Promise<void> {
        const index = dataMongo.findIndex((vehicle) => vehicle.id === id);
        dataMongo.splice(index, 1);
    }
}
