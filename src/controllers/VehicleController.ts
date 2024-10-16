import { Request, Response } from "express";
import { VehicleService } from "../services/VehicleService";

export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  async create(req: Request, res: Response): Promise<Response> {
    const vehicle = await this.vehicleService.create(req.body);
    return res.json(vehicle);
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const vehicle = await this.vehicleService.findById(Number(id));
    return res.json(vehicle);
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    const vehicles = await this.vehicleService.findAll();
    return res.json(vehicles);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const vehicle = await this.vehicleService.update(Number(id), req.body);
    return res.json(vehicle);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await this.vehicleService.delete(Number(id));
    return res.json({ message: "Vehicle deleted" });
  }

}
