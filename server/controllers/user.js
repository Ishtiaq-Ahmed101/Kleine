// @desc    Get all Users
// @route   GET /api/users
// @access  Private
exports.getUsers = (req, res, next) => {
    res.status(200).json({success: true, msg: "All Users"})
}


// @desc    Get single User
// @route   GET /api/user
// @access  Private
exports.getUser = (req, res, next) => {
    res.status(200).json({success: true, msg: "Single User"})
}


// @desc    Create a User
// @route   POST /api/user
// @access  Public
exports.createUser = (req, res, next) => {
    res.status(200).json({success: true, msg: "Create Single User"})
}


// @desc    Delete a User
// @route   DELETE /api/user
// @access  Private
exports.removeUser = (req, res, next) => {
    res.status(200).json({success: true, msg: "Delete User"})
}


// @desc    Update a User
// @route   PUT /api/user
// @access  Private
exports.updateUser = (req, res, next) => {
    res.status(200).json({success: true, msg: "Update User"})
}