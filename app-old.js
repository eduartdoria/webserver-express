const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'Application/Json' })

        let datos = {
            nombre: "Eduart Luis",
            apellidos: "Doria Acevedo",
            url: req.url
        }
        res.write(JSON.stringify(datos));
        //res.write('Hola Mundo');
        res.end();
    })
    .listen(8080);

console.log("Escuchando el puerto 8080");