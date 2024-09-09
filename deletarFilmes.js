const { filmes } = require("./data")

const deletarFilmes = (req, res) => {
    const { id } = req.params
    const index = filmes.findIndex((c) => c.id == id)

    if (index === -1) {
        return res.status(404).send("Filme não encontrado. ")
    }

    const filmeDeletado = filmes.splice(index, 1)[0]

    res.status(200).send({
        mensagem: "Filme deletado com sucesso. ",
        filmes: filmeDeletado
    })
}
module.exports = deletarFilmes