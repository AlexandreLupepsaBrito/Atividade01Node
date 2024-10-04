const express = require('express')
const app = express()
const port =3000
const fs = require('fs')

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Página Inicial</title>
        </head>
        <body>
            <h1>Bem-vindo à Página Inicial!</h1>
            <p>Este é um servidor básico criado com Express.</p>
        </body>
        </html>
    `);
});

app.get('/api/data', (req, res) => {
    data = read('node.json');
    res.end(data[0].nome);
})

function read(file){
    return JSON.parse(fs.readFileSync(file));
}

app.listen(port, () => {
    console.log(`Server listening at
        http://localhost:${port}`)
})