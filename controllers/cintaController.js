const Cinta = require('../models/prestamosModels').Cinta;

exports.crearCinta = async (req, res) => {
    try {
        const newCinta = new Cinta({
            nombre: req.body.nombre
        });
        await newCinta.save();
        res.send(newCinta);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerCinta = async (req, res) => {
    try {
        const cintas = await Cinta.find();
        res.json(cintas);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

