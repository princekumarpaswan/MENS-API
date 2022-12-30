const express = require("express");
require("../src/db/conn");
const router = require("./router/men");



const app = express();
const port = process.env.PORT || 4000;


app.use(express.json())
app.use(router)

// We will handel post request


app.listen(port, () => {
    console.log(`connection is live at port ${port}`);
})