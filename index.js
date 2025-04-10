const express = require ('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send ('Bem vindo ao Codespace!')
})

app.get('/trabalho', (request, response) => {
    response.send ('Aluna: Yhasmin da Silva Barros!')
});
app.listen(port, () => {
    console.log("Aplicação em execução na porta " + port)
})