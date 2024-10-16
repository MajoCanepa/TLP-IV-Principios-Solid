import { IVehicle } from "../models/IVehicle";
import { VehicleService } from "./VehicleService";

export class DescuentoService extends VehicleService {
  constructor() {
    super();
  }

  async aplicarDescuento( id: number, descuento: number ): Promise<IVehicle | null> {
    const vehicle = await this.findById(id);
    
    if (descuento < 0 || descuento > 1) {
      console.log("El descuento debe ser un valor entre 0 y 1");
      return null;
    };
    if (vehicle) {
      vehicle.precio = vehicle.precio - vehicle.precio * descuento;
      const updatedVehicle = await this.update(id, vehicle);
      console.log(`Descuento aplicado al vehiculo con id: ${id}`);
      return updatedVehicle;
    }
    return null;
  }
}
