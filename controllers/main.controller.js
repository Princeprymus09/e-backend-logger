'use strinct';
var mongoose = require('mongoose');
const newApplication = require('../models/application');
const newAuthorization = require('../models/authorization');
const newLogsSchema = require('../models/logs');

class MainController {

	async all(req, res, next) {
		let applicationDetails = await newApplication.find({});
		res.json({ message: 'Data fetched successfully.', data: applicationDetails });
	}

	async create(req, res, next) {
		try {
			const newApp = new newApplication({
				name: req.body.name
			});
		  
			let savedApplication = await newApp.save();
			const auth = new newAuthorization({
				application_id: savedApplication._id,
				token: req.body.token
			});

			await auth.save();
			const logs = new newLogsSchema({
				application_id: savedApplication._id,
				token: req.body.token,
				type: req.body.type,
				priority: req.body.priority,
				path: req.body.path,
				message: req.body.message,
				request: req.body.request,
				response: req.body.response
			});

			await logs.save();
			res.json({ message: 'New Application created successfully.' });
		} catch (err) {
			console.log(err)
			res.json({ message: 'Some error occured.' });
		}
	}

	async info(req, res, next) {
		try {
			let details = await newApplication.findOne({ _id: req.params.id });
			res.json({ message: 'Details Fetched Successfully.', data: details });
		} catch (err) {
			console.log(err)
			res.json({ message: 'Some error occured.' });
		}
	}

	async update(req, res, next) {
		try {
			await newApplication.update({ _id: req.params.id }, { $set: { name: req.body.name } })
			res.json({ message: 'Details updated successfully.' });
		} catch (err) {
			console.log(err)
			res.json({ message: 'Some error occured.' });
		}
	}

	async delete(req, res, next) {
		try {
			await newApplication.deleteOne({ _id: req.params.id })
			res.json({ message: 'Deleted Successfully.' });
		} catch (err) {
			console.log(err)
			res.json({ message: 'Some error occured.' });
		}
	}
}

module.exports = new MainController();
