import express, { Request, Response, NextFunction, Router } from 'express';

const router: Router = express.Router();

router.get('', (req: Request, res: Response, next: NextFunction) => {
  res.json('list of players');
});

router.get('/:playerId', (req: Request, res: Response, next: NextFunction) => {
  res.json('single player ' + req.params.playerId);
});

router.get('/:playerId/shares', (req: Request, res: Response, next: NextFunction) => {
  res.json('player ' + req.params.playerId + ' shares');
});

router.post('/:playerId/endTurn', (req: Request, res: Response, next: NextFunction) => {
  res.json('player ' + req.params.playerId + ' end turn');
});

export default router;
