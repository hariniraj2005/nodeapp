const http = require('http');
const server = http.createServer((req, res) => {
    // Handle incoming HTTP requests
    console.log("HariniJonnada");
  });
  
  // Specify the port on which the server should listen
  const PORT = 4000;
  server.listen(PORT);