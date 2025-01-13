import express from 'express';
import morgan from 'morgan';

const app = express();

// удобное логирование
app.use(morgan('short'));
// конвертация из JSON и записывание в body
app.use(express.json());
// конвертация из Url - например 'application/x-www-form-urlencoded' и записывание в body
app.use(express.urlencoded({ extended: true })); // extended - чтобы использовать внешний модуль fs - более функциональный чем встроенный(зависимость в express)

app.use((req, res) => {
  console.log(req.body);
  return res.send('This is express server');
});

app.listen(5000, () => console.log('server is listening at port 5000'));

// конвертация из формы

// app.use((req, res, next) => {
//   if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
//     let data = '';
//     req.on('data', chunk => (data += chunk.toString()));
//     req.on('end', () => {
//       const parsedFromData = qs.parse(data);
//       req.body = parsedFromData;
//       next();
//     });
//   } else {
//     next();
//   }
// });

// конвертация из JSON вручную

// app.use((req, res, next) => {
//   let data = '';
//   req.on('data', chunk => (data += chunk));
//   req.on('end', () => {
//     const parsedJSON = JSON.parse(data);
//     req.body = parsedJSON;
//     next();
//   });
// });
