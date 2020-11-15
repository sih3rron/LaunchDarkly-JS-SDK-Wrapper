const myContextTypes = function(type){

	if(type === 1) {
		return individual;
	}

	if(type === 2){
		return machine;
	}

	if(type !== 1 | type !== 2){
		return console.error("myContext only accepts type of 1 for individuals or 2 for machine.");
	}

};

const individual = {
	key: Math.floor(49 * Math.random()),
	firstName: 'Simon',
	lastName: 'Herron',
	custom: {
		groups: 'beta_testers',
		accountHolder: true
	},
}

const machine = {
	key: Math.floor(49 * Math.random()),
	tennantId: 'thisIsMyId',
	serviceName: 'MyService',
	route: '/some/route/path',
	callsPerSec: 200,
	custom: {
		host: 'AWS US-East',
		state: 'off'
	},
}

export default myContext;