const catchError = require('../utils/catchError');
const Movie = require('../models/Movie');
const Genre = require('../models/Genre');
const Director = require('../models/Director');
const Actor = require('../models/Actor');


const getAll = catchError(async(req, res) => {
    const actors = await Movie.findAll({include:[Genre, Actor, Director]});
    return res.json(actors);
});

const create = catchError(async(req, res) => {
    const actor = await Movie.create(req.body);
    return res.status(201).json(actor);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const actor = await Movie.findByPk(id, {include:[Genre, Actor, Director]});
    if (!actor) return res.status(404).json({mesagge: "pelicula no encontrada"});
    return res.json(actor)
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Movie.destroy({where: { id: id }});
    return res.sendStatus(204);
});


const update = catchError(async(req, res) => {
    const { id } = req.params;
    const actor = await Movie.update(
        req.body,
        { where: { id: id }, returning: true},
    );
    if (actor[0] === 0) return res.sendStatus(404)
    return res.json(actor[1][0]);
});

const setMovieGenre = catchError(async(req, res) => {
    const { id } = req.params;
    const movie = await Movie.findByPk(id);
    if(!movie)
    return res.status(404).json({
    message: "no se encontro este pelicula"
});
await movie.setGenres(req.body);
const genres = await movie.getGenres();
return res.json(genres)
});

const setMovieActor = catchError(async(req, res) => {
    const { id } = req.params;
    const movie = await Movie.findByPk(id);
    if (!movie)
    return res.status(404).json({
       message:"No se encontro esta pelicula"
    });
await movie.setActors(req.body);
const actors = await movie.getActors();
return res.json(actors)
});
const setMovieDirector = catchError(async(req, res) => {
    const { id } = req.params;
    const movie = await Movie.findByPk(id);
    if (!movie)
    return res.status(404).json({
    message: 'No se encontró esta pelicula'
});
await movie.setDirectors(req.body);
const directors = await movie.getDirectors();
return res.json(directors);
});



module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setMovieGenre,
    setMovieActor,
    setMovieDirector
}