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
  // test
  app.get(`${DEFAULT_API}/test`, (req, res) => {
    try {
      User.find({}, (err, user) => {
        if (err) throw err;
        res.status(200).json(user);
      });
    } catch (error) {
      res.status(500).json({ msg: "DB ERROR!" });
    }
  });
};

module.exports = userRoute;
