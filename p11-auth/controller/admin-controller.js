const adminController = (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Admin route fetched successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "An error occurred while fetching Admin route",
            error: error.message
        });
    }
};

module.exports = adminController;