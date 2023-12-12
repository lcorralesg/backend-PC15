const Pelicula = require('../models/prestamosModels').Pelicula;

exports.crearPelicula= async (req, res) => {
    try {
        const newPelicula = new Pelicula({
            nombre: req.body.nombre
        });
        await newPelicula.save();
        res.send(newPelicula);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPelicula = async (req, res) => {
    try {
        const peliculas = await Pelicula.find();
        res.json(peliculas);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

