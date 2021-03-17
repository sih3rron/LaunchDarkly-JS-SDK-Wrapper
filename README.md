# LaunchDarkly-JS-SDK-Wrapper

Basic Example of a Wrapper using the JS SDK.

* `Flags` contains all of the LaunchDarkly Logic.
* `myContextTypes` contains two versions/types of the User context (addressed only as Context to avoid the stereotype of an individual user).
  *  `known` for known users.
  *  `anonymous` for those users without known attributes.
* `Index` is the entrypoint for the blank webpage.

Should be noted that this is only an example and that the web page itself is arbitrary and therefore does nothing except expose `consoled` outputs.

The wrapper only exposes:

`.treatment()` is a version of the LD `variationDetails()`. 
`ready()` is a preset version of the `on()` method with `ready` in place and awaiting the callback.
`.metric()` is an untouched version of the LD `.track()` method.

Run `npm run build` to compile with Webpack then `npm run dev` compile onto localhost:9000.
