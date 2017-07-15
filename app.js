const express = require('express')
const app = express()

app.get('/api/whoami/', require('./routes').index)

app.use(function(req, res, next) {
    res.status(400);
    res.send('404: File Not Found');
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000, "0.0.0.0", function () {
  console.log('Example app listening on port 3000!')
})

