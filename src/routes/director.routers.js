const { getAll, 
        create,  
        getOne, 
        remove, 
        update } = require('../controllers/director.controller');
const express = require('express');

const directorRouter = express.Router();

directorRouter.route('/directors')
    .get(getAll)
    .post(create);

directorRouter.route('/directors/:id')
     .get(getOne)
     .delete(remove)
     .delete(update);


module.exports = directorRouter;