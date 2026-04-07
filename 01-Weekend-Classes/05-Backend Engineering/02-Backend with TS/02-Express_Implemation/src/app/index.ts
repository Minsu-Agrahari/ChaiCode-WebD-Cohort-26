// 🎯 Handling the Rout
// This is abstract and can be modifily later [to ExpressJS, GoaJs, NestJs, etc]

// src/index.js => does not care how the rout are handels
// src/app/index.js => does not know on which port the rout is running or handeled

import express from 'express' // 🛞 loading Express
import type { Application } from 'express' // 🛞 types <T> of "application types" from Express
import todoRouter from './todo/routes.js'

// wraper for application-logic:- 
/**
 * i. export -> It can be used by other files
 * ii.Objective -> This is done in order to adpate with changes in server architecture 
 */

export function createServerApplication(): Application {

    const app = express();

    // creating Rout:-
    
    // // 🎯 GET Rout
    // app.get('/', function (req, res) {
    //     return res.json({ message: 'Hello ji kaise hoo server started... ' })
    // });
    // // 🎯 GET Rout
    // app.get('/hello', function (req, res) {
    //     return res.json({ message: 'BYE ...  ' })
    // });

    app.use('/todos', todoRouter); // if any request start with '/todos', user todoRouter
    
    return app;
}