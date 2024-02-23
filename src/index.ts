import express from 'express';
import morgan from 'morgan';
import db from './modules/db';

const app = express();
app.use(morgan('dev'));

app.get('/', async (req, res) => {
  const users = await db.user.findMany();
  res.json(users);
});

const port = Number(process.env.PORT || 3000);
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
