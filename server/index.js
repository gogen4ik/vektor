const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;  // или любой другой порт, который вы используете

// Статика (папка с клиентскими файлами)
app.use(express.static(path.join(__dirname, '../client/build')));

// Обработка маршрутов для React приложения
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
