const http = require('http');
const { gerarNumeroAleatorio } = require('./utils');

const requestListener = function (req, res) {
  if (req.url === "/") {
    res.writeHead(200);
    res.end("Bem-Vindo");
  } else if (req.url === "/sobre") {
    res.writeHead(200);
    res.end("Nome: Alexandre, 19 Anos");
  } else if (req.url === "/contato") {
    res.writeHead(200);
    res.end("42 9999-9999");
  } else if (req.url === "/numero") {
    const numeroAleatorio = gerarNumeroAleatorio();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ numero: numeroAleatorio }));
  } else if (req.url.startsWith("/saudacao/")) {
    const nome = req.url.split("/")[2]; 
    res.writeHead(200);
    res.end(`Bem-vindo, ${nome}!`);
  } else {
    res.writeHead(404);
    res.end("Página não encontrada");
  }
};

const server = http.createServer(requestListener);
server.listen(8000, 'localhost', () => {
  console.log("Servidor está rodando em http://localhost:8000");
});
