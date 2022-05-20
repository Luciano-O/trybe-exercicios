const express = require('express');
const UserPostAuth = require('./middlewares/UserPostAuth');
const app = express();

const User = require('./Models/User')

app.use(express.json())

app.post('/user', UserPostAuth, async (req, res) => {
  const { firstName, lastName, email } = req.body;
  await User.create(req.body);
  const users = await User.getAll();

  res.status(201).json({id: users.length, firstName, lastName, email})
})

app.put('/user/:id', UserPostAuth, async (req, res) => {
  const { id } = req.params;
  const users = await User.getAll();
  if(users.length < id) return res.status(404).json({error: true, message: 'Usuário nao encontrado'})
  const { firstName, lastName, email } = req.body;
  User.update(id, req.body);

  res.status(200).json({id, firstName, lastName, email})
})

app.get('/user', async (_req, res) => {
  const users = await User.getAll();

  res.status(200).json(users);
})

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.getById(id)

  if (user.length === 0) return res.status(404).json({error: true, message: 'Usuário não encontrado'})

  res.status(200).json(user)
})

app.listen(3000, () => {
  console.log('Ouvindo na porta 3000')
})