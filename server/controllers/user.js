const User = require("../models/User")
const Bycrypt = require("bcryptjs")


// @desc    Get all Users
// @route   GET /api/users
// @access  Private
exports.getUsers = async (req, res, next) => {
    try {
        const users  = await User.find()
        res.status(201).json({success: true, data: users})
    } catch (err) {
        next(err)
    }
    
}


// @desc    Get single User
// @route   GET /api/user
// @access  Private
exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json({success: true, data: user})
    } catch (err) {
        next(err);
    }
}


// @desc    Create a User
// @route   POST /api/user
// @access  Public
exports.createUser = async (req, res, next) => {
    try {
        const password = req.body.password;
        const encryptedPassword = await Bycrypt.hash(password, 10)
        const user  = await User.create({...req.body, password: encryptedPassword})
        res.status(201).json({success: true, data: user})
    } catch (err) {
        next(err)
    }
    
}


// @desc    Delete a User
// @route   DELETE /api/user
// @access  Private
exports.removeUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).json({success: true, data: user})
    } catch (err) {
        next(err)
    }
    
}


// @desc    Update a User
// @route   PUT /api/user
// @access  Private
exports.updateUser = (req, res, next) => {
    res.status(200).json({success: true, msg: "Update User"})
}


// @desc    LogIn a User
// @route   POST /api/user/login
// @access  Public
exports.logIn = async (req, res, next) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findOne({email: email})
        const pass = await Bycrypt.compare(password, user.password)

        if (pass === true) {
            res.status(200).json({success: true, msg: "User Logged In Successfully", data: user})
        } else {
            res.status(404).json({success: false, msg: "Check your username and password"})
        }
    } catch (err) {
        next(err)
    }
}