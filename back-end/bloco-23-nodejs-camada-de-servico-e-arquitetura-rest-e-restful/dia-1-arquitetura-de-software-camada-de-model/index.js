const express = require('express');
const UserPostAuth = require('./middlewares/UserPostAuth');
const app = express();
app.use(express.json())

app.post('/user', UserPostAuth, (req, res) => {

})

app.listen(3000, () => {
  console.log('Ouvindo na porta 3000')
})