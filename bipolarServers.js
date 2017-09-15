var http = require('http');

var portNice = 7000;

var portMean = 7500;

function handler(request, response)
  {
    var requestUrl = request.url;
  }


var server = http.createServer(handler);

server.listen(portNice, function(err)
  {
      if (err)
        {
            return console.log(err);
        }
        console.log("I love you");
  });

  server.listen(portMean, function(err)
    {
        if (err)
          {
              return console.log(err);
          }
          console.log("Poo Poo head");
    });
