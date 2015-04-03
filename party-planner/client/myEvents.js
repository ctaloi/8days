Template.myEvents.helpers({
  userName: function () {
    return Meteor.user().profile.name;
  },
  userEvents: function () {
  	return Events.find({});
  }
});