const myContext = (function(){

		const individual = {
			key: Math.floor(49 * Math.random()),
			firstName: 'Simon',
			lastName: 'Herron',
			custom: {
				groups: ['beta_testers', 'high_frequency','> 1200'],
				accountHolder: true
			}
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
			serverGroup: ["US-Virginia","EU-Spain","EU-Italy"]
		}

	return {
		getContext: function(type){
			if(type === 1) {
				console.log(individual)
				return individual;
			}
		
			if(type === 2){
				console.log(machine)
				return machine;
			}
			
			if(type !== 1 | type !== 2){
				return console.error("myContext only accepts 'type' of 1 for individuals or 2 for machine.");
			}
		}
	}
})();


export default myContext;