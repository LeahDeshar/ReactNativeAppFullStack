const { hashPassword, comparePassword } = require('../helpers/authHelper');
const User = require('../models/User')
const JWT = require('jsonwebtoken')
exports.registerController = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      console.log(name, email, password);
      //validation
      if (!name) {
        return res.status(400).send({
          success: false,
          message: "name is required",
        });
      }
      if (!email) {
        return res.status(400).send({
          success: false,
          message: "email is required",
        });
      }
      if (!password || password.length < 6) {
        return res.status(400).send({
          success: false,
          message: "password is required and 6 character long",
        });
      }
      //exisiting user
      const exisitingUser = await User.findOne({ email });
      if (exisitingUser) {
        return res.status(500).send({
          success: false,
          message: "User Already Register With This Email",
        });
      }
      //hashed pasword
      const hashedPassword = await hashPassword(password);
  
      //save user
      // const user = await User.create({name,email,password:hashPassword});
      const user = await User({
        name,
        email,
        // password
        password: hashedPassword,
      }).save();
  
      return res.status(201).send({
        success: true,
        user,
        message: "Registration Successful, please login",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        message: "Error in Register API",
        error,
      });
    }
  };

exports.loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
      //validation
      if (!email || !password) {
        return res.status(500).send({
          success: false,
          message: "Please Provide Email Or Password",
        });
      }
      // find user
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(500).send({
          success: false,
          message: "User Not Found",
        });
      }
      // match password
      const match = await comparePassword(password, user.password);
      if (!match) {
        return res.status(500).send({
          success: false,
          message: "Invalid usrname or password",
        });
      }
      // TOKEN JWT
      const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
  
      // undeinfed password
      user.password = undefined;
      res.status(200).send({
        success: true,
        message: "login successfully",
        token,
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        message: "error in login api",
        error,
      });
    }
  };