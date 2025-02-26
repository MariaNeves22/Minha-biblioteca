const multer = require('multer');
const path = require('path');

// Configura o destino e o nome do arquivo
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');  
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));  
  }
});

// Configura o upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 } 
});

module.exports = upload;
