const path = require("path");
// To get whole file route
console.log("File PATH", path.dirname(__filename))
// To get exact file name
console.log("File NAME", path.basename(__filename))
// To get extension name
console.log("Extension Name",path.extname(__filename))

// To joint the path or routes

const jointPath = path.join("/users","document","node", "project");
console.log("Joint Path", jointPath)
const resolvePath = path.resolve("user","document","node","project")
console.log("Resolve path",resolvePath)