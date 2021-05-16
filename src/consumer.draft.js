const log = require("@ajar/marker");
const app = require("./index");

const INPUT = ["hey all", "this is", "a", "slugger test", "by tomerpool"];
log.green(INPUT);
log.blue(app.slugger(...INPUT));
