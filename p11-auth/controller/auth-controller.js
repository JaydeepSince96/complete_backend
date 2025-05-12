const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("../models/user");

const registerUser = async (req, res) => {
  try {
    const { user, email, password, role } = req.body;
    const isUserExist = await User.findOne({ $or: [{ user }, { email }] });
    if (isUserExist) {
      res.status(201).json({
        success: false,
        message: "User is already exist with the same username or email",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newLyCreatedUser = await User.create({
      user,
      email,
      password: hashPassword,
      role: role || "user",
    });
    await newLyCreatedUser.save();
    if (newLyCreatedUser) {
      res.status(200).json({
        success: true,
        message: "User created successfully",
      });
    } else {
      res.status(400).json({
        success: true,
        message:
          "Unable to register the User, Please try again after sometimes",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `something went wrong ${error}`,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const getAllUsers = await User.find({});
    if (getAllUsers) {
      return res.status(201).json({
        success: true,
        message: "User fetched successfully",
        data: getAllUsers,
      });
    } else {
      res.json({
        message: "User doesn't exist",
      });
    }
  } catch (error) {
    return res.status(200).json({
      success: true,
      message: "Logged in Successfully",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const appUser = await User.findOne({ email });

    const isPasswordValid = await bcrypt.compare(password, appUser.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const jwtToken = await jwt.sign(
      { user: appUser.user, email: appUser.email, role: appUser.role },
      // { user: user.user, id: user._id },
      process.env.JWT_SECRETE_KEY,
      { expiresIn: "90m" }
    );
    if (jwtToken) {
      return res.status(200).json({
        success: true,
        message: "Logged in Successfully",
        accessToken: jwtToken,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `something went wrong ${error}`,
    });
  }
};

const forgetPassword = async (req, res) => {
  try {
    const {user} = req;
    console.log(user, "user from forget Pass")
    const {oldPassword, newPassword} = req.body;
    const isUser = await User.findOne({user: user});
    if(!isUser){
      return res.status(404).json({
        success:false,
        message: "User not found"
      })
    }
    const isPasswordMatch = await bcrypt.compare(oldPassword, newPassword);
    if(!isPasswordMatch){
      return res.status(404).json({
        success: false,
        message: "Password do not match"
      })
    }
    const salt = await bcrypt.genSalt(10);
    const newHashPassword = await bcrypt.hash(newPassword, salt);

    user.password = newHashPassword;
    await user.save()
    res.status(200).json({
      success: true,
      message: "Password changed successfully"
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `something went wrong ${error}`,
    });
  }
};

module.exports = { registerUser, loginUser, getUsers, forgetPassword };
