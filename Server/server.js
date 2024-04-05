const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
const cors = require("cors"); // Импортируем модуль для обработки CORS

app.use(cors()); // Добавляем middleware для обработки CORS
app.use(fileUpload({ createParentPath: true }));

app.post("/upload", (req, res) => {
  if (!req.files) {
    return res.status(400).json({ msg: "Не загружен файл" });
  }
  const file = req.files.file;
  if (!file) return res.json({ error: "Некорректное имя" });
  const newFileName = encodeURI(Date.now() + "-" + file.name);
  file.mv(`${__dirname}/images/${newFileName}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    console.log("Файл загружен", __dirname);
    res.json({
      fileName: file.name,
      filePath: `/images/${newFileName}`,
    });
  });
});

app.listen(3001, () => console.log("work on"));
