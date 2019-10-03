import express, { Application, Router, Response, NextFunction, Request } from 'express';
import { connect, connection } from 'mongoose';
import cors from 'cors';
import { mongoConnectionString } from './config/database';
import gameController from './controllers/game-controller';
import playerController from './controllers/player-controller';


connect(mongoConnectionString, { useNewUrlParser: true });

connection.on('connected', () => {
  // tslint:disable-next-line:no-console
  console.log('Connected to database ' + mongoConnectionString);
});

connection.on('error', (err) => {
  // tslint:disable-next-line:no-console
  console.log('Database error ' + err);
});

const port = 3000;
const app: Application = express();
const router: Router = express.Router();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api', router);
router.use('/game', gameController);
router.use('/player', playerController)

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('main API route');
});

// Start server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server running on port ${port}`);
});
