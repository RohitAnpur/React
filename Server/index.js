
const { response, Router } = require('express');
const express = require('express');
const port =8000;
const app = express();
const routes = require('./../routes/routes');
const router = express.Router();
//
app.use(express.json());
app.use(express.urlencoded({extended:false}));
routes(app);
app.use('/', router)
//
app.listen(port, () => {
console.log("Listening " + port );

})

