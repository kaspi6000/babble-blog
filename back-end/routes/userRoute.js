const userRoute = (app, User) => {
  const { DEFAULT_API } = process.env;
  // SignUp
  app.get(`${DEFAULT_API}/signup`, (req, res) => {
    console.log(`API : ${DEFAULT_API}/signup ============ ${req.body}`);
    // console.log(req.query);
    try {
      User.find({ id: req.query.id }, (err, user) => {
        if (err) throw err;
        res.status(200).json(user);
        console.log(user);
      });
    } catch (error) {
      res.status(500).json({ msg: "DB ERROR!" });
    }
  });
  // SginIn
  app.get(`${DEFAULT_API}/signin`, (req, res) => {
    console.log(`API : ${DEFAULT_API}/signin ============ ${req.body}`);
    try {
      User.find({ id: req.body.id }, (err, user) => {
        if (err) throw err;
        res.status(200).json({ ...user, isLogin: true });
      });
    } catch (error) {}
  });
};

module.exports = userRoute;
