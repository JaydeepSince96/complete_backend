const user = require("../models/user");

const homeController = (req, res) => {
  const { user, email, role } = req.userInfo;
  try {
    res.status(200).json({
      success: true,
      message: "Home route fetched successfully",
      user: {
        user,
        email,
        role,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching home route",
      error: error.message,
    });
  }
};

module.exports = homeController;
