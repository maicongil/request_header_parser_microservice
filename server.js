var express = require("express"),
    morgan = require("morgan"),
    app = express(),
    port = process.env.PORT || 8080;

app.use(morgan('combined'));

app.get("*", function(req, res){

    var ipaddress = req.ip;
    if (ipaddress.substr(0, 7) == "::ffff:") {
        ipaddress = ipaddress.substr(7)
    }

    var language = req.headers['accept-language'].substring(0,req.headers['accept-language'].indexOf(","));
    var software = req.headers['user-agent'].match(/\(([^)]+)\)/)[1];

    var output = {
        ipaddress : ipaddress,
        language : language,
        software : software
    };

    res.send(output);
});

app.listen(port, function(){
    console.log("Server is listening on port: "+ port);
});