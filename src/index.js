import Flag from "./Flags";

Flag.on("ready", function(){
	const flagValue = Flag.treatment('Nov2020.wrapper.temp', false);
	console.log(`Flag Value: ${flagValue.value}`);
});


