
const http = require('http');

http.createServer( (req, res) => {
  console.log(req);
  // res.writeHead(200, { 'Content-Type': 'application/json' });
  res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
  res.writeHead(200, { 'Content-Type': 'application/csv' });

  const persona = {
    id: 1,
    nombre: 'Fernando'
  }

  // res.write( JSON.stringify( persona ) );
  res.write('id, nombre\n');
  res.write('1, fernando\n');
  res.write('2, maria\n');
  res.write('3, juan\n');
  res.write('4, pedro\n');
  res.end(); 
})
.listen( 8080 );

console.log('Escuchando el puerto', 8080);
