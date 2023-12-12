const Genero = require('../models/prestamosModels').Genero;

exports.crearGenero = async (req, res) => {
    try {
        const newGenero = new Genero({
            nombre: req.body.nombre
        });
        await newGenero.save();
        res.send(newGenero);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerGenero = async (req, res) => {
    try {
        const generos = await Genero.find();
        res.json(generos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

