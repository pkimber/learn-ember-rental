import DS from 'ember-data';

export default DS.Model.extend({
  companyName: DS.attr('string'),
  fullName: DS.attr('string'),
  postcode: DS.attr('string')
});
