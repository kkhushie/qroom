const User = require('../models/user.model')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!(name && email && password)) {
            res.status(400).send('All fields are compulsory')
        }
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            res.status(401).json({
                success: true,
                message: `${name} already exists!`,
                user: {
                    id: existingUser._id,
                    username: existingUser.name,
                    email: existingUser.email,
                },
            })
            //.send('User already exists.')
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        })
        newUser.save()
        const token = jwt.sign(
            { id: newUser._id, email },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            maxAge: 86400000, // 1 day
        });
        res.status(201).json({
            success: true,
            message: `${name} registered successfully!`,
            token,
            user: {
                id: newUser._id,
                username: newUser.name,
                email: newUser.email,
            },
        });
    }
    catch (error) {
        console.error("Registration Error:", error);

    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!(email && password)) {
            res.status(400).send('All fields are compulsory')
        }
        const existingUser = await User.findOne({ email })

        if (existingUser && (await bcrypt.compare(password, existingUser.password))) {
            const token = jwt.sign({ id: existingUser._id, email: existingUser.email }, process.env.JWT_SECRET, { expiresIn: "1d" });
            res.cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "Strict",
                maxAge: 86400000, // 7 days or 1 day
            });
            await existingUser.save()
            res.status(200).json({
                success: true,
                message: `${existingUser.name} login successful`,
                token,
                user: {
                  id: existingUser._id,
                  name: existingUser.name,
                  email: existingUser.email,
                 
                },
              });
        }
        else {
           return res.status(401).json({
                success: true,
                message: `user doesn't exists!`,
            })
        }

    }
    catch (error) {
        console.error("Login Error:", error);

    }
}
