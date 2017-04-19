var express = require("express"),
    app     = express();

app.use(express.static(__dirname + '/Public'));

app.get("/", function(req, res){
    
    res.render(index.html);
    
});

app.listen(3003, function(){
    console.log("started");
    
});
