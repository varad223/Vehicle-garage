const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const JWT_SIGNATURE = 'JDFUASHUYRHEGLJKADRGNAJKRFGNJKAESGUKLAHBLSDUFHLAERFEF';


// Creating a User
router.post('/signup', [
    body('firstName').exists(),
    body('lastName').exists(),
    body('email', 'Enter valid Email').isEmail(),
    body('password', 'Length of Password is between 8 and 15 characters').isLength({ min: 8, max: 15 })
],
    async (req, res) => {
        console.log('Sign Up Page');
        try {

            const { firstName, lastName, email, password } = req.body;


            const errors = validationResult(req);

            console.log(errors);
            if (!errors.isEmpty()) {

                return res.status(400).json({ errors: errors.array() });
            }

            // Checking if the user exist or not
            let existUser = false;
            let user = null;

            user = await User.findOne({ email });
            console.log('user', user);


            if (user === null) {

                console.log(user, 'hello');
                // Hashing the password
                const salt = await bcrypt.genSalt(10);
                const secPass = await bcrypt.hash(req.body.password, salt);

                // creating the user
                console.log('sec')
                const newuser = await User.create({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: secPass
                });
                console.log(newuser)
                const data = {
                    user: {
                        id: newuser.id
                    }
                }
                console.log(data)

                return res.status(200).json('Successfull Sign Up');
            }
            else {
                return res.status(400).json({ error: 'Sorry the Email is already registered with us' });
            }

        }
        catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Internal Error Occured' });
        }
    });

router.post('/login', async (req, res) => {
    console.log(req.body);


    const result = await User.findOne({ email: req.body.email }).select({ email: 1, password: 1 })
    console.log(result)
    const passwordCompare = await bcrypt.compare(req.body.password, result.password);
    console.log(passwordCompare);

    if (passwordCompare === false) {
        return res.status(401).send('Invalid Credentials');
    }

    else {
        return res.status(200).send('Login sucess')
    }
})

module.exports = router