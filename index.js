// Require express
const express = require("express");
// Request for API calls
const request = require("request");
// Initialize express
const app = express();
const PORT = 8080;
// parse JSON
app.use(express.json());
// parse URL encoded data
app.use(express.urlencoded({ extended: true }));
// VueJS app
app.use(express.static("public"));
// create a server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/race/:id', (req, res) => {
    //https://www.webscorer.com/json/race?raceid=r&apiid=n
  // Forwards webscorer results JSON
    request({
        uri: "https://www.webscorer.com/json/race",
        qs: {
            raceid: req.params.id,
            apiid: "83213"
        }
    }).pipe(res);
});

app.get('/list', (req, res) => {
    request({
        uri: "https://www.webscorer.com/json/registerlist",
        qs: {
            raceid: "311764",
            apiid: "83213"
        }
    }).pipe(res);
});

app.get('/race', (req, res) => {
    request({
        uri: "https://www.webscorer.com/json/mypostedraces",
        qs: {
            apiid: "83213"
        }
    }).pipe(res);
});

app.get('/', (req, res) => {
    res.redirect(301, "https://www.webscorer.com/FreedomRun");
})
