const { filmes } = require("./data")

const buscarAnoFilme = (req, res) => {
    const { ano } = req.query

    const resultado = filmes.find((filmes) => filmes.ano == ano)

    if (!resultado) {
        return res.status(404).send({ mensagem: "Filme não encontrado. " })
    }
    res.status(200).send(resultado)
}
module.exports = buscarAnoFilme