import Flags from "./Flags";

const flag = Flags.getInstance(1);
flag.on("ready", () => {
	console.log(flag.treatment("Nov2020.wrapper.temp", false));
});