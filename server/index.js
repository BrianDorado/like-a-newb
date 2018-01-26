const express = require('express'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      app = express(),
      port = 3000;


// ========== MIDDLEWARE ========== //

// ===== TOP LEVEL MIDDLEWARE ===== //

app.use(bodyParser.json());

// === GET REQUESTS === //
app.get('/data')

// === PUT REQUESTS === //
app.put('/data')

// === POST REQUESTS === //
app.post('/data')

// === DELETE REQUESTS === //
app.delete('data')

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})