import { Router } from "express";
import { VehicleController } from "../controllers/VehicleController";
import { VehicleService } from "../services/VehicleService";
import { DescuentoService } from "../services/DescuentoService";

export class VehicleRoutes {
  static getRoutes(): Router {
    const router = Router();
    const vehicleController = new VehicleController(new DescuentoService());

    router.post("/", vehicleController.create);
    router.get("/", vehicleController.findAll);
    router.get("/:id", vehicleController.findById);
    router.put("/:id", vehicleController.update);
    router.delete("/:id", vehicleController.delete);
    router.post("/descuento", vehicleController.aplicarDescuento);

    return router;
  }
}
