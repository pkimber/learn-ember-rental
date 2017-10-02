import Ember from 'ember';

export default Ember.Component.extend({

    store: Ember.inject.service(),

    actions: {
        setHighPriority() {
            var store = this.get('store');
            let priority = store.peekRecord('priority', 4);
            this.ticket.set('priority', priority);
            this.ticket.save();
        },
    }
});
