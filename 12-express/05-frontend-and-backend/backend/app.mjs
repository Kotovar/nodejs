import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

// удобное логирование
app.use(morgan('short'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// разрешаем доступ со всех адресов
app.use(cors());

app.use((req, res) => {
  const personData = {
    name: 'Dmitry',
    isStudent: true,
  };
  console.log(req.body);
  return res.json(personData);
});

app.listen(5000, () => console.log('server is listening at port 5000'));
