import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor'

Template.mainLayout.onCreated( function() {
  this.currentContent = new ReactiveVar( "landingLayout" );
});

Template.mainLayout.helpers({
  content: function() {
    //return statsContent template
    return Template.instance().currentContent.get();
  },
});

Template.mainLayout.events({
  'click .mainLayoutContentButton': function( event, template ) {

    //get clicked element
    var currentContent = $( event.target ).closest( ".mainLayoutContentButton" );

    //get data-template attirbute of clicked element
    template.currentContent.set( currentContent.data( "template" ) );
  },
});
