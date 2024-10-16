import { Request, Response } from "express";
import { VehicleService } from "../services/VehicleService";
import { DescuentoService } from "../services/DescuentoService";

export class VehicleController {
  constructor(private vehicleService: DescuentoService) {}

  create = async (req: Request, res: Response): Promise<Response> => {
    const vehicle = await this.vehicleService.create(req.body);
    return res.json(vehicle);
  };

  findById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const vehicle = await this.vehicleService.findById(Number(id));
    return res.json(vehicle);
  };

  findAll = async (req: Request, res: Response): Promise<Response> => {
    const vehicles = await this.vehicleService.findAll();
    return res.json(vehicles);
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const vehicle = await this.vehicleService.update(Number(id), req.body);
    return res.json(vehicle);
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    await this.vehicleService.delete(Number(id));
    return res.json({ message: "Vehicle deleted" });
  };

  aplicarDescuento = async (req: Request, res: Response): Promise<Response> => {
    const { id, descuento } = req.body;
    const vehicle = await this.vehicleService.aplicarDescuento(Number(id), descuento);
    return res.json(vehicle);
  };
}
