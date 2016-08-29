import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		login(model) {
			model.validate().then(({
			  model
			}) => {
				this.get('session').open('firebase', {
				                provider: 'password',
				                email: model.get('email'),
				                password: model.get('password')
				           }).then(function() {
				               this.transitionToRoute('index');
				           }.bind(this));
			}, (errors) => {
				console.log(errors);
			});
	  	}
	}
});
