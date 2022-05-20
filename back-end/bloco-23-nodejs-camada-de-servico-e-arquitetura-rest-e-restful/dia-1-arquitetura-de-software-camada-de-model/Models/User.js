const connection = require('./connection');

const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM users');
  return users;
}

const getById = async (id) => {
  const [user] = await connection.execute('SELECT * FROM users WHERE id = ?', [id])
  return user;
}

const update = async (id, {firstName, lastName, email, password}) => {
  await connection.execute(
    'UPDATE users SET firstName = ?, lastName = ?, email = ?, password = ? WHERE id = ?',
    [firstName, lastName, email, password, id]
  )
}

const create = async ({firstName, lastName, email, password}) => {
  await connection.execute(
    'INSERT INTO users (firstName, lastName, email, password) VALUES (?,?,?,?)',
    [firstName, lastName, email, password]
  )
}

module.exports = {
  create,
  getAll,
  getById,
  update,
}