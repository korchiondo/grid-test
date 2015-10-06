var express = require('express');
var app = express();
app.use( express.static(__dirname));
app.use( express.static(__dirname + '/app'));

var perPage = 3;
var testData = [
    {id:1,name:'name'},
    {id:2,name:'name2'},
    {id:3,name:'name3'},
    {id:4,name:'name4'},
    {id:5,name:'name5'},
    {id:6,name:'name6'}
];
app.get('/promotions', function (req, res) {
    var pageData = [];
    console.log(req);
    console.log(req.params);

    var currentPage = (req.query.page) ? req.query.page : 1;
    var end = currentPage* perPage;
    var start =  end - perPage;
    pageData = testData.slice(start,end);
    res.send(
        {
            count:  testData.length,
            items:  pageData
        }
       );
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

