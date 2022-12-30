
const mongoose = require("mongoose");

mongoose.set('strictQuery', false)


mongoose.connect("mongodb://localhost:27017/olumpics", {
    // useCreatIndex: true,
    // useNewUrlParses: true,
    useUnifiedTopology: true
}).then(() => {
    console.group("connection is sucesssful");
}).catch((e) => {
    console.log("No connection", e);
})