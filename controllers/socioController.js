const Socio = require('../models/prestamosModels').Socio;

exports.crearSocio = async (req, res) => {
    try {
        const newSocio = new Socio({
            nombre: req.body.nombre
        });
        await newSocio.save();
        res.send(newSocio);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerSocio = async (req, res) => {
    try {
        const socios = await Socio.find();
        res.json(socios);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

