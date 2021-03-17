import Flags from "./Flags";
import Context from "./contextTypes";

let userData = {
	"ID": "ABDCE",
};

let user = new Context();

const flag = Flags.getInstance(user.known(userData));
flag.on("ready", () => {
	console.log(flag.treatment("Nov2020.wrapper.temp", false));
});