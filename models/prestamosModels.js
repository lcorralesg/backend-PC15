const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
    nombre: String,
});
const Director = mongoose.model('Director', directorSchema);

const actorSchema = new mongoose.Schema({
    nombre: String,
});
const Actor = mongoose.model('Actor', actorSchema);

const generoSchema = new mongoose.Schema({
    nombre: String,
});
const Genero = mongoose.model('Genero', generoSchema);

const peliculaSchema = new mongoose.Schema({
    codigo: Number,
    titulo: String,
    director: { type: mongoose.Schema.Types.ObjectId, ref: 'Director' },
    actores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Actor' }],
    genero: { type: mongoose.Schema.Types.ObjectId, ref: 'Genero' },
});
const Pelicula = mongoose.model('Pelicula', peliculaSchema);

const cintaSchema = new mongoose.Schema({
    numero: { type: Number, unique: true },
    estado: { type: String, enum: ['Disponible', 'Prestada'], default: 'Disponible' },
    pelicula: { type: mongoose.Schema.Types.ObjectId, ref: 'Pelicula' },
});
const Cinta = mongoose.model('Cinta', cintaSchema);

const socioSchema = new mongoose.Schema({
    codigo: Number,
    nombre: String,
    direccion: String,
    telefono: String,
    directoresFavoritos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Director' }],
    actoresFavoritos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Actor' }],
    generosPreferidos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genero' }],
});
const Socio = mongoose.model('Socio', socioSchema)

const peliculasPrsstadasSchema = new mongoose.Schema({
    fechaPrestamo: Date,
    fechaDevolucion: Date,
    socio: { type: mongoose.Schema.Types.ObjectId, ref: 'Socio' },
    cinta: { type: mongoose.Schema.Types.ObjectId, ref: 'Cinta' },
});
const PeliculasPrestadas = mongoose.model('PeliculasPrestadas', peliculasPrsstadasSchema);

module.exports = {
    Director,
    Actor,
    Genero,
    Pelicula,
    Cinta,
    Socio,
    PeliculasPrestadas
}
