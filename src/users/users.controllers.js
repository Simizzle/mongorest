const User = require("./users.model");

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res
      .status(200)
      .send({ user: savedUser, message: "User created in database" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.findUser = async (req, res) => {
    try {
        const user = req.params.username;
        const targetUser = await User.findOne({username: user});
        res.send(200).send({ user: targetUser})
    } catch (error) {
        res.status(500).send(error);
    }
};


exports.deleteUser = async (req, res) => {
    try {
        const user = req.params.username;
            const deletedUser = await User.findOneAndDelete({username: user});
            res.status(200).send({ user: deletedUser, message: "User deleted" })
    } catch (error) {
        res.staus(500).send(error);
    }  
};

exports.updateUser = async (req, res) => {
    try {
        const user = req.body.username;
        const pass = req.body.password;
        const userModify = await User.updateOne({username: user, password: pass});
        res.status(200).send({ user: userModify, message: "User updated"})
    } catch (error) {
        res.status(500).send(error)
    }
};