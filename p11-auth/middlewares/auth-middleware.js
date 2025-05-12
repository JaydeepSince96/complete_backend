const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];  // it is headers not header alwayas remember that.
  const token = authHeader && authHeader.split(" ")[1]; 
  // never erver put . after split(" ") and split should have one space inside double quote
  if (!token) {
    return res.status(401).json({
      success: false,
      message:
        "authentication denied, token not provided, login again to continue",
    });
  }

  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SECRETE_KEY);
    console.log("Decoded Token:", decodeToken);
    req.userInfo = decodeToken;
    console.log(req.userInfo,"user Info")
    next();
  } catch (error) {
    res.status(501).json({
      success: false,
      message: "Something Went wrong. Please login again",
    });
  }
};
 
module.exports = authMiddleware;
