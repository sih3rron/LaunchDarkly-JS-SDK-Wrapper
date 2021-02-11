import Flags from "./Flags";

let userData = {
	"ID": "ABDCE",
};

let user = new Context(known);

const flag = Flags.getInstance(user.known(userData));
flag.on("ready", () => {
	console.log(flag.treatment("Nov2020.wrapper.temp", false));
});