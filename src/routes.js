const Router = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer')

const controller = require('./app/controllers/LegendaryController');
const uploadFileController = require('./app/controllers/UploadFileController');
const CoachController = require('./app/controllers/CoachController');

const uploadFile = multer({ storage: multerConfig })

const routes = new Router();

//routes.get('/legendaries', controller.index);
routes.get('/legendaries', controller.ListData);
routes.post('/legendaries', controller.create);
routes.put('/legendaries/:id', controller.update);
routes.delete('/legendaries/:id', controller.delete);

routes.get('/coach', CoachController.list);
routes.post('/coach', CoachController.create);
routes.put('/coach/:id', CoachController.update);
routes.delete('/coach/:id', CoachController.delete);

routes.post('/uploads', uploadFile.single('file'), uploadFileController.storeFile);

module.exports = routes;