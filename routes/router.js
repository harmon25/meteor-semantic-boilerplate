/*
* @Author: harmoN
* @Date:   2015-07-12 17:30:55
* @Last Modified by:   harmoN
* @Last Modified time: 2015-07-12 22:56:24
*/

AccountsTemplates.configure({
    showForgotPasswordLink: true,
    overrideLoginErrors: true,
    enablePasswordChange: true,
    sendVerificationEmail: false,
    negativeValidation: true,
    positiveValidation:true,
    negativeFeedback: false,
    positiveFeedback:false,
    homeRoutePath: '/home',
    redirectTimeout: 2000,
    defaultLayoutRegions: {},
    defaultLayout: 'mainPublic',
        // new property
    defaultContentRegion: 'content'
});

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn',
     {redirect: function(){
        FlowRouter.go('/home');
     }} );
AccountsTemplates.configureRoute('verifyEmail');
var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 3,
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email',
  },
  {
      _id: 'username_and_email',
      type: 'text',
      placeholder:"Username or Email",
      required: true,
      displayName: "Login",
  },
  pwd
]);


FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {
    },
    action: function() {
        console.log("route not found");
        FlowRouter.go("/");
    }
};

FlowRouter.route('/', {
    // define your subscriptions
    subscriptions: function(params, queryParams) {
    },
    // do some action for this route
    action: function(params, queryParams) {
        FlowLayout.render("mainPublic", {content:"login", foot:"footer"});
    },
    name: "login" // optional
});

FlowRouter.route('/home', {
    // define your subscriptions
    subscriptions: function(params, queryParams) {
    },
    // do some action for this route
    action: function(params, queryParams) {
        FlowLayout.render("mainLayout", {top: "navBar", content:"home", foot:"footer"});
    },
    middlewares: [AccountsTemplates.ensureSignedIn],
    name: "home" // optional
});


FlowRouter.route('/private', {
    // define your subscriptions

    subscriptions: function(params, queryParams) {
    },
    // do some action for this route
    action: function(params, queryParams) {
        FlowLayout.render("mainLayout", {top: "navBar", content:"private", foot:"footer"});
    },
    middlewares: [AccountsTemplates.ensureSignedIn],
    name: "private" // optional
});


