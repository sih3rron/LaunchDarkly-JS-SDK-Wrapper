import Flags from "./Flags";

Flags.on("ready", function(){
	const flagValue = Flags.treatment('Nov2020.wrapper.temp', false);
	console.log(`Flag Value: ${flagValue.value}`);
});


