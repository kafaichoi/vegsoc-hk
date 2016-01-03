var keystone = require('keystone'),
	moment = require('moment')

var Meetup = keystone.list('Meetup'),
	Post = keystone.list('Post'),
	RSVP = keystone.list('RSVP');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	locals.section = 'home';
	locals.meetup = {};
	locals.page.title = 'Welcome to VegsocHK';

	locals.rsvpStatus = {};

	locals.user = req.user;

	view.render('site/index');

}
