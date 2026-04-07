// Creating my Raw Web-Server
// Server is created using Libary, Like
// Express is one of the famous Libary

const http = require('http') // OR require ('node:http')

const server = http.createServer((req, res) => {  // req --> send user data || res --> server send, and then libuv & c++ binding will combine them 
    
        //                        Rout (where) 
        //                             ⬇️
    if (req.method === 'GET' && req.url === '/menu') { // HTTP Methods 
        // This can handel all GET request from menu
        
        //         status code
        //             ⬇️
        res.writeHead( 200, {'Content-Type': 'application/json'}); // [[ content-Type ]] can be for diff types [xml, json, html, css]
        res,end(JSON.stringify({items: ['thali', 'biryani']})); // 📩 sending Resonds
    
        //                               Rout (where) 
        //                                     ⬇️
    }else if (req.method === 'POST' && req.url === '/order'){
        // POST 📩 [[ Data + Respond ]]

        let data = '';

        // Adding Event Listerner
        req.on ('data', chunk => data += chunk); // on ➡️ same as add event listner
        req.on ('end', () => {
            const order = JSON.parse(data);
            res.writeHead( 200, {"Content-Type": "application/json"});
            res.end ( JSON.stringify ({
                status: 'received',
                order
            }))
        })
    }
});