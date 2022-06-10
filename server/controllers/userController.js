const User = require('../models/userModel');
const SECRET_KEY = process.env.SECRET_KEY || 'lalala this isnt secure';
const jwt = require('jsonwebtoken');


const login = async (req, res) => {
  // REMOVE-START
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    //const validatedPass = await bcrypt.compare(password, user.password);
    const validatedPass = password === user.password;
    if (!validatedPass) throw new Error();
    const accessToken = jwt.sign({ _id: user._id }, SECRET_KEY, {expiresIn: 3600});
    res.status(200).send({ accessToken });
  } catch (error) {
    res
      .status(401)
      .send({ error: '401', message: 'Username or password is incorrect' });
  }
  // REMOVE-END
};

const logout = (req, res) => {
  // REMOVE-START
  // delete the token client side upon logout.
  // you would invalidate the token here.
  // REMOVE-END
};

module.exports = { login, logout };

