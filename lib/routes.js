const publicRoutes = FlowRouter.group( { name: 'public' } );

// const loggedInRoutes = FlowRouter.group({
//   triggersEnter: [
//     (context, redirect) => {
//       if (!Meteor.userId()) {
//         redirect('/');
//       }
//     }
//   ]
// });

//landing page
publicRoutes.route('/', {
  name: 'landing',
  action() {
    BlazeLayout.render('mainLayout', {navbar: "NavbarLayout", content: "landingLayout"});
  }
});

// loggedInRoutes.route('/statskeeping', {
//   name: 'StatskeepingLayout',
//   action() {
//     BlazeLayout.render('mainLayout', {navbar: "NavbarLayout", content: "StatskeepingLayout"});
//   }
// });

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('mainLayout', {navbar: "NavbarLayout", content: "routeNotFound"});
  }
};
