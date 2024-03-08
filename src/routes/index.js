const express = require('express');
const actorRouter = require('./actor.routers');
const directorRouter = require('./director.routers');
const movieRouter = require('./movie.routers');
const genreRouter = require('./genre.routers');
const router = express.Router();

// colocar las rutas aquí

router.use(actorRouter)
router.use(directorRouter)
router.use(movieRouter)
router.use(genreRouter)


module.exports = router;