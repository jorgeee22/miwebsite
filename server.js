const express = require('express');
const app = express();


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/destination', (req, res) => {
    res.render('destination');
  });
// Inicia el servidor
app.listen(3005, () => {
  console.log('Servidor ejecutandose en el puerto 3005');
});
