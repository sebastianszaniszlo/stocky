import express, { Request, Response, NextFunction, Router } from 'express';

const router: Router = express.Router();

router.get('/state', (req: Request, res: Response, next: NextFunction) => {
  res.json('game state');
});

router.get('/prices', (req: Request, res: Response, next: NextFunction) => {
  res.json('stock prices');
});

router.get('/cards', (req: Request, res: Response, next: NextFunction) => {
  res.json('cards');
});

router.get('/scoreboard', (req: Request, res: Response, next: NextFunction) => {
  res.json('scoreboard');
});

router.post('/buy', (req: Request, res: Response, next: NextFunction) => {
  res.json('buy request');
});

router.post('/sell', (req: Request, res: Response, next: NextFunction) => {
  res.json('sell request');
});

router.post('/vote', (req: Request, res: Response, next: NextFunction) => {
  res.json('vote request');
});

router.post('/vote/execute', (req: Request, res: Response, next: NextFunction) => {
  res.json('execute vote request');
});

export default router;
