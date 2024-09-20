const { Livro } = require('../models');

exports.getAddLivro = (req, res) => {
    res.render('addLivro');
  };

// Cadastrar um novo livro com imagem (apenas para admin)
exports.postAddLivro = async (req, res) => {
  const { titulo, autor, genero, descricao, data_lanc } = req.body;
  const imagem = req.file ? req.file.filename : null;  // Pega o nome do arquivo da imagem

  try {
    await Livro.create({
      titulo,
      autor,
      genero,
      descricao,
      data_lanc,
      imagem  // Armazena o nome do arquivo da imagem no banco de dados
    });
    res.redirect('/livros?success=Livro+cadastrado+com+sucesso');
  } catch (err) {
    console.error(err);
    res.redirect('/livros?error=Erro+ao+cadastrar+livro');
  }
};

// Visualizar todos os livros (acessível para todos os usuários)
exports.getLivros = async (req, res) => {
    try {
      const livros = await Livro.findAll();
      res.render('livros', { livros });
    } catch (err) {
      console.error(err);
      res.render('livros', { livros: [], error: 'Erro ao buscar livros' });
    }
  };
