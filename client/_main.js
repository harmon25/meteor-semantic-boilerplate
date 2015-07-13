/*
* @Author: harmoN
* @Date:   2015-07-12 16:52:52
* @Last Modified by:   harmoN
* @Last Modified time: 2015-07-12 22:32:52
*/

  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.home.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.home.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });


  Template.private.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.private.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

Template.navBar.events({
    'click .signOut': function () {
        Meteor.logout()
        FlowRouter.go('/');
    }
});
