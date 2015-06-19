import Ember from 'ember';

export default Ember.Controller.extend({
  questionEditing: false,
  actions: {
    editQuestion: function() {
      this.set('questionEditing', true);
    },
    saveQuestion: function() {
      this.set('questionEditing', false);
    },
    deleteQuestion: function() {
      if(confirm("Really delete this question?")) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    },
    addAnswer: function() {
      var inputAnswer = this.get('newAnswer');
      var newAnswers = this.get('answers').addObject(inputAnswer);
      this.set('answers', newAnswers);
      this.set('newAnswer', '');
    },
    deleteAnswer: function(params) {
      var answers = this.get('answers');
      answers.removeObject(params);
    }
  }
});
