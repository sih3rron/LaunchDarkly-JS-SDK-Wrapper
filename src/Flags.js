import LDClient from "launchdarkly-js-client-sdk";

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

	function create(context){
		const clientFlags = LDClient.initialize(myFlag.sdkKey, context, myFlag.options);
		return {
					
			ready: (callbackFunc) => {
				try {
					return clientFlags.on("ready", callbackFunc);
				}
				catch (err) {
					console.error(err);
				}
			},
			
			treatment: (flagName, baseline) => {
				try {

					//Add an Analytics Event to Mirror your variation call and metadata.
					const details = clientFlags.variationDetail(flagName, baseline);
					let assignmentDetails = {
						flagName: flagName,
						variationIndex: details.variationIndex,
						value: details.value,
						ruleId: details.ruleId,
						ruleIndex: details.ruleIndex
					};

					/*//Example of a GA implementation
					
							if (window._gaq && window._gaq._getTracker) {

								window.ga('send', 'event', 
									[eventCategory], //assignmentDetails.flagName, 
									[eventAction], //${assignmentDetails.flagName `Evaluation`}, 
									[eventLabel], // assignmentDetails.ruleId, 
									[eventValue], // assignmentDetails.variationIndex, 
									{nonInteraction: true}
								);
							
						} 
					*/

					return assignmentDetails;
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