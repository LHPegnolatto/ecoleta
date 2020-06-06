import ItemsController from '../controllers/ItemsController';

const itemsController = new ItemsController();

module.exports = (router: any) => {
  router.get('/items', itemsController.index);
}