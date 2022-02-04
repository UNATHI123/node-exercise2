var http =require('http');
var server =http.createServer(function(req, res) {
    res.setHeader("Content-type","application/json");
    res.setHeader("Acess-control-Allow-origin","*");
    res.writeHead(200);


    let data0bj=[
        {id:1234 , name:"Bob",email:"bob@Work.org"},
        {id:123 , name:"Hearts",email:"Hearts@122.org"},
        {id:12 , name:"Abishola",email:"Abishola@122.org"},
        
    ];
    
    

    let data =JSON.stringify(data0bj);
    res.end(data);
    
});
server.listen(12345, function(){
console.log("listening on port 12345")
});

