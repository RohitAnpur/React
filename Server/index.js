
const { response } = require('express');
const express = require('express');
const port =8000;
const app = express();
const routes = require('./../routes/routes');
//
app.use(express.json());
app.use(express.urlencoded({extended:false}));
routes(app);
//
app.listen(port, () => {
console.log("Listening " + port );

})

