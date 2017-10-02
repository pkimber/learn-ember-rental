import DS from 'ember-data';

export default DS.Model.extend({
  contact: DS.belongsTo('contact'),
  title: DS.attr('string'),
  priority: DS.belongsTo('priority'),
  username: DS.attr('string')
});
