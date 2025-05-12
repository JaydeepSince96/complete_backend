const isAdmin = (req, res, next) => {
    if (!req.userInfo || !req.userInfo.role) {
        return res.status(403).json({
            success: false,
            message: "Permission denied, authentication required"
        });
    }

    if (req.userInfo.role !== "admin") {
        return res.status(403).json({
            success: false,
            message: "Permission denied, admin rights required"
        });
    }

    next(); 
};

module.exports = isAdmin;
