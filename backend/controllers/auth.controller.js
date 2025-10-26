const User = require('../models/user.model');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

/**
 * Register a new user
 */
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate input
        if (!(name && email && password)) {
            return res.status(400).json({
                success: false,
                message: 'All fields are compulsory'
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(401).json({
                success: false,
                message: `${name} already exists!`,
                user: {
                    id: existingUser._id,
                    username: existingUser.name,
                    email: existingUser.email,
                },
            });
        }

        // Hash password and create user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        // Generate JWT token
        const token = jwt.sign(
            { id: newUser._id, email },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        // Set cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            maxAge: 86400000, // 1 day
        });

        // Send response
        return res.status(201).json({
            success: true,
            message: `${name} registered successfully!`,
            token,
            user: {
                id: newUser._id,
                username: newUser.name,
                email: newUser.email,
            },
        });

    } catch (error) {
        console.error("Registration Error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

/**
 * Login an existing user
 */
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!(email && password)) {
            return res.status(400).json({
                success: false,
                message: 'All fields are compulsory'
            });
        }

        const existingUser = await User.findOne({ email });

        // Check user and password
        if (existingUser && await bcrypt.compare(password, existingUser.password)) {
            const token = jwt.sign(
                { id: existingUser._id, email: existingUser.email },
                process.env.JWT_SECRET,
                { expiresIn: "1d" }
            );

            // Set cookie
            res.cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "Strict",
                maxAge: 86400000, // 1 day
            });

            return res.status(200).json({
                success: true,
                message: `${existingUser.name} login successful`,
                token,
                user: {
                    id: existingUser._id,
                    name: existingUser.name,
                    email: existingUser.email,
                },
            });
        } else {
            return res.status(401).json({
                success: false,
                message: "User doesn't exist or password is incorrect!"
            });
        }

    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};
