const router = require('express').Router();

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

router.post('/hash', (req, res) => {
  const credentials = req.body; 
  const hash = bcrypt.hashSync(credentials.password, 14);
  credentials.password = hash; 

  if(!user || !bcrypt.compareSync(credentials.password, user.password)){
    return res.status(401).json({error : 'Incorrect credentials'})
  }

})

module.exports = router;
