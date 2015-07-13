/*
* @Author: harmoN
* @Date:   2015-07-12 16:53:05
* @Last Modified by:   harmoN
* @Last Modified time: 2015-07-12 20:35:05
*/
  Meteor.startup(function () {
   try{
var users = [
      {name:"admin",email:"test@test.com",roles:['admin']},

    ];

  _.each(users, function (user) {
    var id;
if (Meteor.users.find({emails:{$elemMatch:{ address: user.email }}}).count() == 0 ){
    id = Accounts.createUser({
      email: user.email,
      password: "letmein",
      profile: { firstName: user.name }
    });
    console.log("created user: " + user.name);
         if (user.roles.length > 0) {
            Roles.addUsersToRoles(id, user.roles, Roles.GLOBAL_GROUP);
          }
}
  });
}catch(error){
    console.log(error);
  }
  });
