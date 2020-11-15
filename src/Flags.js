import LDClient from "launchdarkly-js-client-sdk";

const myContext = {
	user: {
		firstName: 'Simon',
		lastName: 'Herron',
		key: Math.floor(49*Math.random()),
		custom: {
			groups: 'beta_testers',
			state: 'off'
		},
	},
}

const myFlag = {
	sdkKey: "5f7c5a3ac3cd090c293946cd",
	flagName: "Nov2020.wrapper.temp",
	baseline: false,
	options: {
		useReport: true,
		evaluationReasons: true,
		allAttributesPrivate: false,
	},
}

const Flag = (function(){
	const clientFlags = LDClient.initialize(myFlag.sdkKey, myContext.user, myFlag.options);
	console.log(clientFlags);
	return {
			on: function(eventName, callbackFunc){
				try {
					return clientFlags.on(eventName, callbackFunc);
				}
				catch(err){
					console.error(err);
				}
			},
			treatment: function(flagName, baseline){
				try {
					console.log(clientFlags.variationDetail(flagName, baseline));
					return clientFlags.variationDetail(flagName, baseline);
				}
				catch(err){
					console.error(err);
				}
			},
			metric: function(eventName, data, numeric){
				try {
					return clientFlags.track(eventName, data, numeric);
				}
				catch(err){
					console.error(err);
				}
			},	
		};
	}
)(LDClient);

export default Flag;