const PeliculasPrestadas = require('../models/prestamosModels').PeliculasPrestadas;

exports.crearPeliculasPrestadas = async (req, res) => {
    try {
        const newPeliculasPrestadas = new PeliculasPrestadas({
            nombre: req.body.nombre
        });
        await newPeliculasPrestadas.save();
        res.send(newPeliculasPrestadas);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPeliculasPrestadas = async (req, res) => {
    try {
        const peliculasprestadas = await PeliculasPrestadas.find();
        res.json(peliculasprestadas);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

