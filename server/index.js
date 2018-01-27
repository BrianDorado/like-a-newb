const bodyParser = require('body-parser'),
      express = require('express'),
      massive = require('massive'),
      app = express(),
      port = 4444;

let user = {
    name: 'nate'
}
let somethingCleverAndDescriptive = {
    name: 'Fiya'
}

// HUGE!
massive(process.env.DB_CONNECTION).then(db => {
    app.set('db', )
})

app.use(bodyParser.json());

// get reqs 
app.get('/data', (req, res) => {
    res.status(200).send('something')
})
// put reqs
app.put('/data', (req, res) => {

})

// post reqs
app.post('/data', (req, res) => {
    somethingCleverAndDescriptive = req.body;
    res.status(200).send(somethingCleverAndDescriptive)
})

// delete reqs 
app.delete('/data/', (req, res) => {
    user = {}
        res.status(200)
})
    




app.listen(port, () => {
    console.log(`listening on port ${port}`)
})