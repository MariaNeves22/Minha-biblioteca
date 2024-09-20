const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');
const checarAcesso = require('../middleware/checarAcesso');
const upload = require('../middleware/upload');

// Rota para exibir o formulário de cadastro de livros (apenas admin)
router.get('/add-livro', checarAcesso.isAdmin, livroController.getAddLivro);

// Rota para cadastrar um livro com upload de imagem (apenas admin)
router.post('/add-livro', checarAcesso.isAdmin, upload.single('imagem'), livroController.postAddLivro);

// Rota para visualizar todos os livros (acessível para todos)
router.get('/livros', checarAcesso.isAuthenticated, livroController.getLivros);

module.exports = router;
