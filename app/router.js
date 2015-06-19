import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('questions', {path:'/'});
  this.route('question', {path: 'question/:id'});
});

export default Router;
