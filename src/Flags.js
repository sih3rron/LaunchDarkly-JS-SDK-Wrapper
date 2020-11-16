import LDClient from "launchdarkly-js-client-sdk";
import myContext from "./myContextTypes";

const Flags = (function(){
	const myFlag = {
		sdkKey: "5f7c5a3ac3cd090c293946cd",
		options: {
			useReport: true,
			evaluationReasons: true,
			allAttributesPrivate: false,
		},
	}
	const clientFlags = LDClient.initialize(myFlag.sdkKey, myContext.getContext(1), myFlag.options);
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
				//Add an Analytics Event to Mirror your variation call and metadata.
					return clientFlags.variationDetail(flagName, baseline);
				}
				catch(err){
					console.error(err);
				}
			},

			metric: function(eventName, data, numeric){
				try {
				//Add an Analytics Event to Mirror your tracking call and metadata.
					return clientFlags.track(eventName, data, numeric);
				}
				catch(err){
					console.error(err);
				}
			}	
		};
	}
)();

export default Flags;