Template.view.helpers({
	application: function () {
		var user = Meteor.user();
		var user = user.username;

		return Applications.find({postedBy: user}, {sort: {submitted: -1}});

	}
});