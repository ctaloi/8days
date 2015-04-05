Template.myEvents.helpers({
  userName: function () {
    return Meteor.user().profile.name;
  },
  userEvents: function () {
  	return Events.find({});
  },
  getEvent: function (eventId) {
  	return Events.find({_id: eventId})
  }
});

Template.myEvents.events({
	'click': function () {
		console.log(this)
		// ...
	}
});