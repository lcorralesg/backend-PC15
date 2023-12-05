const Actor = require('../models/prestamosModels').Actor;

exports.crearActor = async (req, res) => {
    try {
        const newActor = new Actor({
            nombre: req.body.nombre
        });
        await newActor.save();
        res.send(newActor);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerActor = async (req, res) => {
    try {
        const actores = await Actor.find();
        res.json(actores);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

