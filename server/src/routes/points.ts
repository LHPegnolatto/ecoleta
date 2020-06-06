import PointsController from '../controllers/PointsController';

const pointsController = new PointsController();

module.exports = (router: any) => {
  router.get('/points', pointsController.index);
  router.get('/points/:id', pointsController.show);
  router.post('/points', pointsController.create);
}