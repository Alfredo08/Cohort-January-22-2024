const express = require('express');
const Users = require('./../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = 'this_must_be_secret';
const validateToken = require('./../middlewares/validateToken');

const userController = express.Router();

userController.post('/login', (req, res) => {
    const {email, password} = req.body;
    Users.getOne([email])
        .then((result) => {
            if(result.rows.length === 0){
                return res.status(404).json({message: 'User not found.'});
            }
            bcrypt.compare(password, result.rows[0].password)
                .then((bcryptResult) => {
                    if(! bcryptResult){
                        return res.status(406).json({message: 'Invalid credentials'});
                    }

                    const payload = {
                        email: email,
                        firstName: result.rows[0].first_name,
                        lastName: result.rows[0].last_name,
                        id: result.rows[0].id
                    };

                    jwt.sign(payload, SECRET, {expiresIn: "1m"}, (error, token) => {
                        if(error){
                            return res.status(406).json({message: "Something wrong with jwt."});
                        }
                        return res.status(200).json({token});
                    });
                })
                .catch((error) => {
                    return res.status(406).json({message: 'Something wrong with bcrypt'});
                });
        });
});

userController.get('/verify', validateToken, (req, res) => {
    console.log(req.userInfo);
    const {firstName, lastName} = req.userInfo;
    return res.status(200).json({message: `Welcome back ${firstName} ${lastName}`});
});

module.exports = userController;
