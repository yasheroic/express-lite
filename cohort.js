const http = require('http');

const routes = [];

function createServer(){
    function requestHandler(req,res){
        res.send = function (data){
            res.end(data);    
        };
        let matchedRoute = routes.find(route=>route.method === req.method && route.path === req.url)

        if(matchedRoute){
            matchedRoute.handler(req,res)
        }
        else{
            res.end('Route not found')
        }
    }

const server = http.createServer(requestHandler)

function listen(port,callback){
    server.listen(port,callback)
}

function get(path,handler){
    routes.push({
        method:"GET",
        path:path,
        handler:handler
    })
}

function post(path,handler){
    routes.push({
        method:'POST',
        path:path,
        handler:handler
    })
}

return {listen:listen, get:get, post:post}

}

module.exports = createServer