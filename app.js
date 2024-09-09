const express = require("express")
const app = express()
const port = 2000
app.use(express.json())

const criarFilmes = require("./criarFilmes")
const listarFilmes = require("./listarFilmes")
const atualizarFilmes = require("./atualizarFilmes")
const deletarFilmes = require("./deletarFilmes")
const buscarAnoFilme = require("./buscarAnoFilme")

app.post("/filmes", criarFilmes)
app.get("/filmes", listarFilmes)
app.put("/filmes/:id", atualizarFilmes)
app.delete("/filmes/:id", deletarFilmes)
app.get("/filmes/busca", buscarAnoFilme)


app.get("/", (req, res) => {
    res.send("Servidor express está funcionando")
})

app.listen(port, () => {
    console.log(`Sistema rodando em localhost: ${port}. `)
})