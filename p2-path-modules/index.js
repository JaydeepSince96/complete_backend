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

//It wil gives us resolved path mean if you'r in /home/alex so it will give you /home/alex/users/document/node/project in my case (I'm using window) It will give me: D:\POCs\BE\BasicToPro\p2-path-modules\user\document\node\project
const resolvePath = path.resolve("user","document","node","project")
console.log("Resolve path",resolvePath)