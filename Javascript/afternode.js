const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>DOM</title>
  </head>
  <body>
      <div id="main" class="container">
          <ul id="nav">
              <li>Info 1</li>
              <li>Info 2</li>
              <li>Info 3</li>
              <li>Info 4</li>
              <li>Info 5</li>
          </ul>
      </div>
      <div class="container">This is another container</div>
  
      <script>
          let main = document.getElementById('main');
          console.log(main);
          let nav = document.getElementById('nav')
          console.log(nav);
  
          let cont = document.getElementsByClassName('container');
          console.log(cont);
  
          // let sel = document.querySelector('.container');
          // console.log(sel);
          let sel = document.querySelector('#nav>li');
          console.log(sel);
          
      </script>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});