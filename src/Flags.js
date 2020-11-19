import LDClient from "launchdarkly-js-client-sdk";
import myContext from "./myContextTypes";

const Flags = (function(){
	let theseFlags;

	const myFlag = {
		sdkKey: "5f7c5a3ac3cd090c293946cd",
		options: {
			useReport: true,
			evaluationReasons: true,
			allAttributesPrivate: false,
		},
	}

	// The argument 'context' is the numeric value that relates to the type of user object you pass in.
	function create(context){
		const clientFlags = LDClient.initialize(myFlag.sdkKey, myContext.getContext(context), myFlag.options);
		return {
					
			on: (eventName, callbackFunc) => {
				try {
					return clientFlags.on(eventName, callbackFunc);
				}
				catch (err) {
					console.error(err);
				}
			},
			
			treatment: (flagName, baseline) => {
				try {
					//Add an Analytics Event to Mirror your variation call and metadata.
					return clientFlags.variationDetail(flagName, baseline);
				}
				catch (err) {
					console.error(err);
				}
			},
			
			metric: (eventName, data, numeric) => {
				try {
					//Add an Analytics Event to Mirror your tracking call and metadata.
					return clientFlags.track(eventName, data, numeric);
				}
				catch (err) {
					console.error(err);
				}
			}	

		}
	};

	return {
		getInstance: function(context){
				if(!theseFlags){
					theseFlags = create(context);
				}
				return theseFlags;
			}
		}
	}
)();

export default Flags;