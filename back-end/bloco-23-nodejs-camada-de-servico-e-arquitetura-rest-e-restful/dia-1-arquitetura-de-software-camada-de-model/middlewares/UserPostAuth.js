const UserPostAuth = (req, res, next) => {
  const { firtName, lastName, email, password } = req.body;
  if(!firtName) return res.status(400).json({ error: true, message: 'O campo First Name é origatorio' })
  if(!email) return res.status(400).json({ error: true, message: 'O campo Email é origatorio' })
  if(!lastName) return res.status(400).json({ error: true, message: 'O campo Last Name é origatorio' })
  if(!password) return res.status(400).json({ error: true, message: 'O campo Password é origatorio' })
  if(password.length < 6) return res.status(400).json({ error: true, message: 'O campo "password" deve ter pelo menos 6 caracteres' })

  next();
}

module.exports = UserPostAuth;
