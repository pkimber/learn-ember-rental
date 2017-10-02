import Ember from 'ember';
import SaveModelMixin from 'rental/mixins/contacts/save-model-mixin';

export default Ember.Route.extend(SaveModelMixin, {
  model: function() {
    return this.store.createRecord('contact');
  }
});
