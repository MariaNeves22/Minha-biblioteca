const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 3001; // Alterei de PATH para PORT e mudei a porta

const userRotas = require('./routes/userRotas');
const livroRotas = require('./routes/livroRotas');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

// Define a pasta public para arquivos estáticos
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));  // Pasta para servir imagens enviadas

app.use(session({
  secret: 'senai456',
  resave: false,
  saveUninitialized: false
}));

// Usando as rotas de usuário
app.use(userRotas);
app.use(livroRotas);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
