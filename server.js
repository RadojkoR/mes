const express = require('express');

const app = express();

app.use('/', express.static(__dirname))

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/usluge', (req, res) => {
    res.sendFile(__dirname + '/usluge.html');
});

app.get('/contactUs', (req, res) => {
    res.sendFile(__dirname + '/contactUs.html');
});