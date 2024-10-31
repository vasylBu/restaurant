
const express = require('express');
const cors = require('cors'); 
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Маршрут для реєстрації
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  // Логіка для збереження нового користувача в базі даних
  console.log('Новий користувач:', { username, email, password });
  res.json({ message: 'Користувача успішно зареєстровано' });
});

// Маршрут для логіну
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Умовна логіка для перевірки імені користувача та пароля
  console.log('Спроба входу користувача:', { username, password });

  // Приклад простої перевірки (у реальному додатку дані мають зберігатися в базі даних)
  if (username === 'testuser' && password === 'testpassword') {
    res.json({ message: 'Успішний вхід', token: 'example_token' });
  } else {
    res.status(401).json({ message: 'Неправильне ім\'я користувача або пароль' });
  }
});

app.listen(5000, () => {
  console.log('Сервер запущено на порті 5000');
});
