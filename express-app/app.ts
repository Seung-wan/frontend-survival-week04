import express from 'express';
import cors from 'cors';

const restaurants = {
  restaurants: [
    {
      id: '1',
      category: '중식',
      name: '메가반점',
      menus: [
        { id: '1', name: '짜장면', price: 8000 },
        { id: '2', name: '짬뽕', price: 8000 },
        { id: '3', name: '차돌짬뽕', price: 9000 },
        { id: '4', name: '탕수육', price: 14000 },
      ],
    },
    {
      id: '2',
      category: '한식',
      name: '메리김밥',
      menus: [
        { id: '5', name: '김밥', price: 3500 },
        { id: '6', name: '참치김밥', price: 4500 },
        { id: '7', name: '제육김밥', price: 5000 },
        { id: '8', name: '훈제오리김밥', price: 5500 },
      ],
    },
    {
      id: '3',
      category: '일식',
      name: '혹등고래카레',
      menus: [
        { id: '9', name: '기본카레', price: 9000 },
        { id: '10', name: '가라아게카레', price: 14000 },
        { id: '11', name: '소시지카레', price: 13000 },
        { id: '12', name: '돈까스카레', price: 14000 },
        { id: '13', name: '닭가슴살카레', price: 13000 },
      ],
    },
  ],
};

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/restaurants', (_, res) => {
  res.status(200).send(restaurants);
});

app.post('/orders', (req, res) => {
  const { menus, totalPrice } = req.body;

  const receiptId = new Date().getTime();

  res.status(201).send({
    id: receiptId,
    menus,
    totalPrice,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
