var express = require("express"),
    morgan = require("morgan"),
    app = express(),
    port = process.env.PORT || 8080;

app.use(morgan('combined'));

app.get("*", function(req, res){
    var output = {
        ipaddress : req.ip,
        language : req.headers['accept-language'].substring(0,req.headers['accept-language'].indexOf(",")),
        software : req.headers['user-agent'].match(/\(([^)]+)\)/)[1]
    };
    res.send(output);
});

app.listen(port, function(){
    console.log("Server is listening on port: "+ port);
});