import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  priority: DS.attr('string'),
  username: DS.attr('string')
});
