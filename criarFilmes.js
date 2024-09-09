const { filmes } = require("./data")

function criarFilmes(req, res) {
    const novoFilme = {
        id: filmes.length + 1,
        titulo: req.body.titulo,
        diretor: req.body.diretor,
        ano: req.body.ano,
        genero: req.body.genero
    }
    filmes.push(novoFilme)
    res.status(201).send({
        mensagem: "Filmes criado com sucesso. ", filmes: novoFilme
    })
}
module.exports = criarFilmes