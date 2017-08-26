import Ember from 'ember';
import SaveModelMixin from 'rental/mixins/rentals/save-model-mixin';

export default Ember.Route.extend(SaveModelMixin, {
  model: function() {
    return this.store.createRecord('rental');
  }
});
