const express = require('express');
const cors = require('cors');

const productsRouter = require('./routes/products');
const orderRouter = require('./routes/order');

const app = express();


app.use(cors({
    origin: '*',
    methods: ['GET', 'PUT', 'DELETE', 'PATCH', 'POST'],
    allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
}));

app.get('/', (req, res) => {
  res.send('Successful response.');
});


app.use('/products', productsRouter);
app.use('/orders', orderRouter);



app.listen(3000, () => console.log(`Example app is listening on ${process.env} 3000.`));
