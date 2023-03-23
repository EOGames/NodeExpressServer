const express = require('express');
const app = express();

app.get('',(req,res)=>
{
    // to access query just add ? after url like http://localhost:5001/?name=Rob 
    // here after ? that name=Rob is query which can be accessed by req.query.name
    console.log(req.query.name);   
    res.send(
        `<div>
            <h1>This Is Home Page</h1>
            <input type="text" placeholder ='EnterName' id="" />
            <button>Save</button>
        </div>`
    );
});

app.get('/add',(req,res)=>
{
    res.send(
    [
        {
            name: 'Waheguru Ji',
            email: 'Godmail.com'
        },

        {
            name: 'Satnam Ji',
            email: 'ekonkar.com'
        },
    ]);
});

app.get('/about',(req,res)=>
{
    res.send('This is About Page');
});

app.listen(5001,()=> console.log('server online at 5001'));