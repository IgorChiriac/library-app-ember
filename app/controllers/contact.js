import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		submitContactForm(model) {
			const email = model.get('email');
			const message = model.get('message');

			const newContactMessage = this.store.createRecord('contact', {
			  email: email,
			  message: message
			});

			newContactMessage.save().then(() => {
				console.log("set");
			  this.set('responseMessage', 'Thank you');
			  this.set('emailAddress', '');
			});
	  	}
	}
});
