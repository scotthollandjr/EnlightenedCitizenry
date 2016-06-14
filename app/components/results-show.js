import Ember from 'ember';

export default Ember.Component.extend({
    legislatorsBoolean: false,
    committeesBoolean: false,
    billsBoolean: false,

    actions: {
      showLegislators() {
        console.log('legislators');
        this.set('committeesBoolean', false);
        this.set('billsBoolean', false);
        this.set('legislatorsBoolean', true);
      },

      showCommittees() {
        this.set('billsBoolean', false);
        this.set('legislatorsBoolean', false);
        this.set('committeesBoolean', true);
      },

      showBills() {
        this.set('legislatorsBoolean', false);
        this.set('committeesBoolean', false);
        this.set('billsBoolean', true);
      }
    }
});
