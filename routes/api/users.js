const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load User model
const User = require('../../models/User');

// @route Get api/users
// @desc get all users
// @access authenticated
// router.get('/', (req, res) => {
// 	User.find()
// 		.sort({ date: -1 })
// 		.then(users => res.json(users));
// });

// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', (req, res) => {
	//console.log(req.body);
	//res.send(200);
	// Form validation

	const { errors, isValid } = validateRegisterInput(req.body);

	// Check validation
	if (!isValid) {
		return res.status(200).json({error: JSON.stringify(errors)});
	}
	User.findOne({ email: req.body.email }).then(user => {
		if (user) {
			return res.status(200).json({ error: 'Email already exists' });
		}

		const newUser = new User({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		});

		// Hash password before saving in database
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(newUser.password, salt, (err, hash) => {
				if (err) throw err;
				newUser.password = hash;
				newUser
					.save()
					.then(user => res.json({
						register: true,
						user: user,
					}))
					.catch(err => console.log(err));
			});
		});
	});
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post('/login', (req, res) => {
	//console.log("***login***");
	// Form validation
	const { errors, isValid } = validateLoginInput(req.body);

	// Check validation
	if (!isValid) {
		//console.log("input is not valid");
		return res.status(200).json({
			success: false,
			error: 'Invalid Inputs: Enter an email address and password.',
		});
	}

	const email = req.body.email;
	const password = req.body.password;

	// Find user by email
	User.findOne({ email }).then(user => {
		//console.log("user was found");
		//console.log("user");
		// Check if user exists
		if (!user) {
			return res.status(200).json({
				success: false,
				error: 'User Not Found',
			});
		}

		// Check password
		bcrypt.compare(password, user.password).then(isMatch => {
			if (isMatch) {
				// User matched
				// Create JWT Payload
				const payload = {
					id: user.id,
					name: user.name,
				};

				// Sign token
				jwt.sign(
					payload,
					'secret',
					{
						expiresIn: 86400, // 1 day in seconds
					},
					(err, token) => {
						res.json({
							success: true,
							user: {
								name: user.name,
								email: user.email,
							},
							token: 'Bearer ' + token,
						});
					}
				);
			} else {
				return res.status(200).json({
					success: false,
					error: 'Incorrect Password',
				});
			}
		});
	});
});

module.exports = router;
