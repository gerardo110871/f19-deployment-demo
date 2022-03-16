const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

//middleware
app.use(express.static(path.join(__dirname, '../public')));
// app.use("/styles", express.static(path.join(__dirname, '../public/index.css')));//we dont need this line since our css is linked in html file that is in the public folder
app.use("/images", express.static(path.join(__dirname, '../images')))//use this if images folder is used

//middleware and endpoints do the same things, write one or the other

//endpoints
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '../public'))
// })

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });
// //we need to add this endpoint that heroku needs to hit to access css, be sure to add it in html as a link
// app.get("/styles", function(req, res) {
//     res.sendFile(path.join(__dirname, '../public/index.css'));
// })

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`We vibin on port ${port}`);
});