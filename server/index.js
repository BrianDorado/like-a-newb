const bodyParser = require('body-parser'),
      express = require('express'),
      massive = require('massive'),
      app = express(),
      port = 4444;



// HUGE!
massive(process.env.DB_CONNECTION).then(db => {
    app.set('db', db)
})

app.use(bodyParser.json());

// get reqs 
app.get('/data')
// put reqs
app.put('/data')

// post reqs
app.post('/data')

// delete reqs 
app.delete('/data')



app.listen(port, () => {
    console.log(`listening on port ${port}`)
})