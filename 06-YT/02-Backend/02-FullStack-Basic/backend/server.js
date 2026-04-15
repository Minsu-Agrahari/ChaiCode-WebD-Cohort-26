import express from "express";

const app = express();

// get a list of 5 jokes
app.get(    , (req, res) => {

    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'A third joke',
            content: 'This is third joke'
        },
        {
            id: 4,
            title: 'A fourth joke',
            content: 'This is fourth joke'
        },
        {
            id: 5,
            title: 'fifth joke',
            content: 'This is fifth joke'
        },
    ]
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server at http://localhost:${port}`);
});
