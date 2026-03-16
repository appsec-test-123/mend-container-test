const express = require('express');
const st = require('st');
const _ = require('lodash');
const app = express();
const port = 3001;

// Vulnerable static file serving (Directory Traversal)
app.use(st({ path: __dirname + '/public', url: '/public', dot: true }));

app.get('/', (req, res) => {
  res.send('<h1>Vulnerable POC Server</h1><p>Mend and Wiz should see this.</p>');
});

// Vulnerable logic (Prototype Pollution via lodash)
app.get('/update', (req, res) => {
    let config = {};
    const input = JSON.parse(req.query.data || "{}");
    _.merge(config, input); 
    res.send("Config updated!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
