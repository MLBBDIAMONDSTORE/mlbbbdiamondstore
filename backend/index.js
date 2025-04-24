const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

app.post('/order', (req, res) => {
  const { user, item, price } = req.body;
  console.log(`Yangi buyurtma: ${user?.first_name || 'Foydalanuvchi'} ${item} uchun $${price}`);
  res.send('Buyurtmangiz qabul qilindi!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend server http://localhost:${PORT} da ishga tushdi`));