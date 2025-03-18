const express = require('express');
const app = express();
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');

app.use(express.json());
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));