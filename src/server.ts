import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { ClientRoutes } from './routes/client-routes';
import { VehicleRoutes } from './routes/vehicle-routes';

export default class Server {
    
        private app: Application;
        private port: number;
    
        constructor() {
            this.app = express();
            this.port =  4000;
    
            this.middlewares();
            this.routes();
        }

        private middlewares(): void {
            this.app.use(cors());
            this.app.use(morgan('dev'));
            this.app.use(express.json());
            this.app.use(helmet());
        }
    
        private routes(): void {
            this.app.get('/', (req, res) => {
                res.send('Concesionaria');
            });
            this.app.use('/clients', ClientRoutes.getRoutes());
            this.app.use('/vehicles', VehicleRoutes.getRoutes());
        }
    
        public async listen() {
            this.app.listen(this.port, () => {
                console.log(`Servidor corriendo en http://localhost:${this.port}`);
            });
        }
    }